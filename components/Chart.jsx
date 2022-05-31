import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData, options, barData, barOptions }) => {
  return (
    <div>
      <div>
        <Line data={chartData} options={options} />
      </div>

      <div>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default Chart;
