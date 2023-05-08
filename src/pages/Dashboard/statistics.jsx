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
import { theme } from "antd";

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
  const { complaint, department, status } = useContext(MyContext);
  const {
    token: {
      colorPrimary,
      colorError,
      colorSuccessText,
      colorTextSecondary,
      colorText,
      colorSuccessActive,
    },
  } = theme.useToken();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Number of Complaints",
      },
    },
  };
  const monthOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
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
  const departments = department.map((element) => {
    return element.value;
  });
  const byStatus = status.map((element) => {
    return element.value;
  });
  const month = [
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
  const departmentData = {
    labels: departments,
    datasets: [
      {
        label: "Total Number of Complaints",
        data: departments.map((dep) => {
          let count = 0;
          complaint.map((td) => {
            if (td.department === dep) {
              count++;
            }
          });
          return count;
        }),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
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
  const departmentSolvedStatus = {
    labels: departments,
    datasets: [
      {
        label: "Total Number of Solved Complaints",
        data: departments.map((dep) => {
          let count = 0;
          complaint.map((td) => {
            if (td.department === dep && td.status === "Solved") {
              count++;
            }
          });
          return count;
        }),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
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
  const statusData = {
    labels: byStatus,
    datasets: [
      {
        label: "Total Number of Complaints",
        data: byStatus.map((dep) => {
          let count = 0;
          complaint.map((td) => {
            if (td.status === dep) {
              count++;
            }
          });
          return count;
        }),
        backgroundColor: [
          colorError,
          colorPrimary,
          colorSuccessText,
          colorTextSecondary,
          colorText,
        ],
        borderColor: [
          colorError,
          colorPrimary,
          colorSuccessText,
          colorTextSecondary,
          colorText,
        ],
      },
    ],
  };
  const monthData = {
    labels: month,
    datasets: [
      {
        label: "Total Number of Complaints by Month",
        data: month.map((dep) => {
          let count = 0;
          complaint.map((td) => {
            if (month[moment(td.date).month()] === dep) {
              count++;
            }
          });
          return count;
        }),
        backgroundColor: colorSuccessActive,
        borderColor: colorSuccessActive,
      },
    ],
  };
  return (
    <div className="flex-row min-h-screen justify-between items-center">
      <div className=" flex w-full">
        <div className="flex w-1/3 gap-2">
          <Pie options={options} data={departmentData} />
          <Pie options={options} data={statusData} />
          <Pie options={options} data={departmentSolvedStatus} />
        </div>
      </div>
      <div className=" flex w-full justify-center">
        <Bar options={monthOptions} data={monthData} />
      </div>
    </div>
  );
};

export default observer(Statistics);
