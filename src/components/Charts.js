import React from "react";
import { Bar } from "react-chartjs-2";

function Reports({ students }) {
  const studentsByClass = students.reduce((groups, student) => {
    if (!groups[student.class]) {
      groups[student.class] = 0;
    }
    groups[student.class]++;
    return groups;
  }, {});

  const data = {
    labels: Object.keys(studentsByClass),
    datasets: [
      {
        label: "Students by Class",
        data: Object.values(studentsByClass),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Reports</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Reports;