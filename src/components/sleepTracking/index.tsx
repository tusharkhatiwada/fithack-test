import React from "react";
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
import { userData } from "../../data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 4,
      grid: {
        display: true,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export function SleepTracking() {
  const formattedSleepHistory = React.useMemo(() => {
    return {
      labels: userData.sleepTracking.map((entry) => entry.date),
      datasets: [
        {
          label: "Sleep in hrs",
          fill: true,
          data: userData.sleepTracking.map((entry) => entry.hours),
          borderColor: "rgb(54, 162, 235)",
          backgroundColor: "rgb(54, 162, 235, 0.5)",
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    };
  }, []);
  return (
    <div className='rounded shadow bg-white p-4'>
      <h2 className='text-xl font-semibold text-gray-900'>Sleep Tracking</h2>
      <Bar options={options} data={formattedSleepHistory} />
    </div>
  );
}
