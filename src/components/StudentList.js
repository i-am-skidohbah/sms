import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./StudentList.css"; // Include the styles

function StudentList({ students }) {
  const [search, setSearch] = useState("");

  // Group students by class
  const groupedStudents = students.reduce((groups, student) => {
    if (!groups[student.class]) {
      groups[student.class] = [];
    }
    groups[student.class].push(student);
    return groups;
  }, {});

  // Filter students based on the search input
  const filteredStudents = Object.keys(groupedStudents).reduce((filteredGroups, className) => {
    const filtered = groupedStudents[className].filter(
      (student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.class.toLowerCase().includes(search.toLowerCase())
    );
    if (filtered.length > 0) {
      filteredGroups[className] = filtered;
    }
    return filteredGroups;
  }, {});

  // Export data to Excel
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    Object.keys(groupedStudents).forEach((className) => {
      const worksheetData = groupedStudents[className].map((student) => ({
        Name: student.name,
        "Date of Birth": student.dob,
        Address: student.address,
        Class: student.class,
        Parent: student.parentName,
        Phone: student.phone,
      }));
      const worksheet = XLSX.utils.json_to_sheet(worksheetData);
      XLSX.utils.book_append_sheet(workbook, worksheet, className);
    });
    XLSX.writeFile(workbook, "StudentList.xlsx");
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>

      {/* Search Tab */}
      <input
        type="text"
        placeholder="Search by Name or Class"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Export to Excel Button */}
      <button onClick={exportToExcel} className="export-button">
        Export to Excel
      </button>

      {/* Grouped Students by Class */}
      {Object.keys(filteredStudents).map((className) => (
        <div key={className} className="class-group">
          <h3>{className}</h3>
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Parent</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents[className].map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.dob}</td>
                  <td>{student.address}</td>
                  <td>{student.parentName}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button onClick={() => alert(`Viewing ${student.name}`)}>
                      View
                    </button>
                    <button onClick={() => alert(`Deleting ${student.name}`)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default StudentList;