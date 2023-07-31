import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
// import {faker} from "@faker-js/faker";
// import { colors } from "@/constants/theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
      align: "start" as const,
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 20000,
      },
      grid: {
        color: "#EDECEC",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const DAYS = [
  "Sept 10",
  "Sept 11",
  "Sept 12",
  "Sept 13",
  "Sept 14",
  "Sept 15",
  "Sept 16",
];

export function days(config: any) {
  var cfg = config || {};
  var count = cfg.count || 7;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = DAYS[Math.ceil(i) % 7];
    values.push(value.substring(0, section));
  }

  return values;
}

export const data = {
  labels: days({ count: 7 }),
  datasets: [
    {
      fill: true,
      label: "Income Amount",
      data: days({ count: 7 }).map(
        () => faker.number.int({ min: 20000, max: 100000 })
        // 0
      ),
      borderColor: "#5570F1",
      borderRadius: 9,
      backgroundColor: "#5570F1",
      barThickness: 10,
    },
  ],
};

export default function DashboardChart() {
  return <Bar options={options} data={data} height={140} />;
}
