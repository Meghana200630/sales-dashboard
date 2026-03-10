import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [5000, 7000, 6500, 9000, 8500, 10000],
        backgroundColor: "rgba(54,162,235,0.6)"
      }
    ]
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>Monthly Sales Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default SalesChart;