import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
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
	Filler,
	Legend,
);

interface Props {
	chartData: { [key: string]: number }[];
}
function BalanceChart({ chartData }: Props) {
	const labels = ["", "", "", "", "", "", ""];
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				ticks: {
					color: "white",
					beginAtZero: true,
				},
				grid: {
					display: false,
				},
			},
			x: {
				ticks: {
					color: "white",
					beginAtZero: true,
				},
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				data: labels.map(() => Math.random() * 10 * Math.random()),
				pointRadius: 0,
				backgroundColor: "rgba(88,237,183,.5)",
				borderColor: "rgba(88,237,183,1)",
				color: "rgba(88,237,183,1)",
				tension: 0.05,
			},
		],
	};
	return (
		<div>
			<Line options={options} data={data} />
		</div>
	);
}

export default BalanceChart;
