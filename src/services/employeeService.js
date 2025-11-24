import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const employeeRef = collection(db, "employees");

export async function getEmployees() {
  const snapshot = await getDocs(employeeRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addEmployee(employee) {
  await addDoc(employeeRef, employee);
}

export async function deleteEmployee(id) {
  await deleteDoc(doc(db, "employees", id));
}
