import { useContext } from "react";
import { MyContext } from "../../context/context";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { observer } from "mobx-react";
import moment from "moment/moment";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Statistics = () => {
  const { complaint, department } = useContext(MyContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ToDo Data",
      },
    },
    scales: {
      y: {
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Number of Complaints",
        data: labels.map((month) => {
          let count = 0;
          complaint.map((td) => {
            if (labels[moment(td.date).month()] === month) {
              count++;
            }
          });
          return count;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div className="flex-row min-h-screen justify-between items-center">
      <div className=" flex w-full">
        <div className="flex w-1/3 gap-5">
          <Pie options={options} data={data} />
          <Pie options={options} data={data} />
          <Pie options={options} data={data} />
        </div>
      </div>
      <div className=" flex w-full justify-center">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default observer(Statistics);
