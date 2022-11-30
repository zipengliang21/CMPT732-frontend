import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Star Rating Count',
      font: {
        size: 20
      }
    },
  },
};

const labels = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];

export const values = [50, 120, 300, 580, 400]

export const data = {
  labels,
  datasets: [
    {
      label: "# of business",
      data: labels.map((value, index, array) => values[index]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data}/>;
}
