import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import axios from "axios";
import fetchCatagories from "../Utils/fetchCatagories";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [catagories, setCatagories] = useState();

  useEffect(() => {
    fetchCatagories().then(data => {
      setCatagories(data)
    })
  }, []);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales By Catagories",
      },
    },
  };

  const data = {
    labels: catagories && catagories.map((obj) => obj.displayName),
    datasets: [
      {
        label: "Amount",
        data: catagories && catagories.map(() => 15),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: 'Profit',
        data: catagories && catagories.map(() => 50),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
