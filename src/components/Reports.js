import React from "react";

function Reports({ students }) {
  const totalStudents = students.length;

  // Group students by class
  const studentsByClass = students.reduce((groups, student) => {
    if (!groups[student.class]) {
      groups[student.class] = 0;
    }
    groups[student.class]++;
    return groups;
  }, {});

  // Find the class with the most students
  const classWithMostStudents = Object.keys(studentsByClass).reduce((maxClass, currentClass) => {
    return studentsByClass[currentClass] > (studentsByClass[maxClass] || 0) ? currentClass : maxClass;
  }, "");

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Students: {totalStudents}</p>
      <h3>Students by Class:</h3>
      <ul>
        {Object.keys(studentsByClass).map((className) => (
          <li key={className}>
            {className}: {studentsByClass[className]}
          </li>
        ))}
      </ul>
      <p>Class with Most Students: {classWithMostStudents}</p>
    </div>
  );
}

export default Reports;