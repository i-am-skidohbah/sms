import React, { useState } from "react";
import "./StudentForm.css"; // For custom styles

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    dob: "",
    address: "",
    phone: "",
    class: "",
    parentName: "",
    parentPhone: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({
      name: "",
      dob: "",
      address: "",
      phone: "",
      class: "",
      parentName: "",
      parentPhone: "",
      notes: "",
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Register New Student</h2>
      
      <label>Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        required
      />

      <label>Date of Birth</label>
      <input
        type="date"
        value={student.dob}
        onChange={(e) => setStudent({ ...student, dob: e.target.value })}
        required
      />

      <label>Address</label>
      <input
        type="text"
        placeholder="Home Address"
        value={student.address}
        onChange={(e) => setStudent({ ...student, address: e.target.value })}
        required
      />

      <label>Phone Number</label>
      <input
        type="tel"
        placeholder="Phone Number"
        value={student.phone}
        onChange={(e) => setStudent({ ...student, phone: e.target.value })}
        required
      />

      <label>Class</label>
      <select
        value={student.class}
        onChange={(e) => setStudent({ ...student, class: e.target.value })}
        required
      >
        <option value="">Select Class</option>
        <option value="Creche">Creche</option>
        <option value="Reception">Reception</option>
        <option value="Nursery 1">Nursery 1</option>
        <option value="Nursery 2">Nursery 2</option>
        <option value="Primary 1">Primary 1</option>
        <option value="Primary 2">Primary 2</option>
        <option value="Primary 3">Primary 3</option>
        <option value="Primary 4">Primary 4</option>
        <option value="Primary 5">Primary 5</option>
        <option value="Primary 6">Primary 6</option>
      </select>

      <label>Parent/Guardian Name</label>
      <input
        type="text"
        placeholder="Parent/Guardian Name"
        value={student.parentName}
        onChange={(e) => setStudent({ ...student, parentName: e.target.value })}
        required
      />

      <label>Parent/Guardian Phone</label>
      <input
        type="tel"
        placeholder="Parent/Guardian Phone Number"
        value={student.parentPhone}
        onChange={(e) => setStudent({ ...student, parentPhone: e.target.value })}
        required
      />

      <label>Additional Notes</label>
      <textarea
        placeholder="Additional Notes"
        value={student.notes}
        onChange={(e) => setStudent({ ...student, notes: e.target.value })}
        rows="4"
      />

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;