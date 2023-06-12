import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const colorItems = (tooltipItem) => {
  const tooltipBg = tooltipItem.tooltip.labelColors[0].borderColor;
  return tooltipBg;
};

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      displayColors: false,
      backgroundColor: colorItems,
    },
    legend: {
      display: false,
      position: "top",
      align: "start",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const arr1 = [
  30000, 20000, 40000, 60000, 50000, 70000, 90000, 80000, 100000, 120000,
  110000, 100000,
];
const arr2 = [
  20000, 10000, 30000, 50000, 40000, 60000, 80000, 70000, 90000, 110000, 100000,
  120000,
];

export const data = {
  labels,
  datasets: [
    {
      label: "Fees Collection",
      data: arr1,
      borderColor: "#FF9900",
      backgroundColor: "#FF9900",
      tension: 0.5,
    },
    {
      label: "Total Collection",
      data: arr2,
      borderColor: "#1EB3A6",
      backgroundColor: "#1EB3A6",
      tension: 0.5,
    },
  ],
};

const LineChart = () => {
  return (
    <div className='w-3/5 bg-white shadow-md py-5 px-5 rounded-md'>
      <div>
        <div>
          <h3 className='font-semibold text-xl'>Earnings</h3>
          <div className='flex justify-start gap-5 my-3'>
            <span className='flex justify-center items-center gap-3'>
              <p className='w-2 h-2 rounded-full bg-[#1EB3A6]'></p>
              <span>
                <p className='text-[#1EB3A6] text-md font-semibold'>200k+</p>
                <p className='text-xs'>Total Collection</p>
              </span>
            </span>

            <span className='flex justify-center items-center gap-3'>
              <p className='w-2 h-2 rounded-full bg-[#FF9900]'></p>
              <span>
                <p className='text-[#FF9900] text-md font-semibold'>1500k+</p>
                <p className='text-xs'>Fees Collection</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
