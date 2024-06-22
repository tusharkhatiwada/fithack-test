import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { userData } from "../../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

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
      max: 75,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export function WeightHistory() {
  const formattedWeightHistory = React.useMemo(() => {
    return {
      labels: userData.healthStats.weightHistory.map((entry) => entry.month),
      datasets: [
        {
          label: "Weight",
          fill: true,
          data: userData.healthStats.weightHistory.map((entry) => entry.weight),
          borderWidth: 1,
          borderColor: "#6d28d9",
          backgroundColor: "rgba(109, 40, 217, 0.2)",
          tension: 0.4,
        },
      ],
    };
  }, []);

  return <Line options={options} data={formattedWeightHistory} />;
}
