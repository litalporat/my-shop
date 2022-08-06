import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ salesByCountry }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales By Catagories',
      },
    },
  };

  const data = {
    labels: salesByCountry.map((obj) => obj.country),
    datasets: [
      {
        label: 'Orders',
        data: salesByCountry.map((obj) => obj.amountSold),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Profit',
        data: salesByCountry.map((obj) => obj.profit),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
