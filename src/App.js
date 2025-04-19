import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Reports from "./components/Reports";

function App() {
  const [activeTab, setActiveTab] = useState("registrationTab");
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      {activeTab === "registrationTab" && <StudentForm addStudent={addStudent} />}
      {activeTab === "studentListTab" && <StudentList students={students} />}
      {activeTab === "reportsTab" && <Reports students={students} />}
    </div>
  );
}

export default App;