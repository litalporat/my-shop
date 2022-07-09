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
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then(function (response) {
        // handle success
        setCatagories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log(catagories);

  useEffect(() => {
      catagories && catagories.map((obj) => labels.push(obj.displayName));
    }, [catagories]);

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
    labels,
    datasets: [
      {
        label: "Dataset 1",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: 50,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
