import { useEffect, useState } from "react";
import { getEmployees, addEmployee, deleteEmployee } from "./services/employeeService";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmp, setNewEmp] = useState({ name: "", email: "" });

  const loadData = async () => {
    setEmployees(await getEmployees());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(newEmp);
    setNewEmp({ name: "", email: "" });
    loadData();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React + Firestore (2-Tier)</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={newEmp.name}
          onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={newEmp.email}
          onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
        />
        <button>Add</button>
      </form>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} | {emp.email}
            <button onClick={() => { deleteEmployee(emp.id); loadData(); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
