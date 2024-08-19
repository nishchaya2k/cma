import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

interface LineChartProps {
  labels: string[];
  cases: number[];
}

const LineChart = ({ labels, cases }: LineChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "COVID-19 Cases",
        data: cases,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="h-[150px] w-[240px] sm:w-[300px]">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
