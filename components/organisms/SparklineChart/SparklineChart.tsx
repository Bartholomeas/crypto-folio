import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface Props {
	chartData: number[];
	coinName: string;
}

const SparklineChart = ({ chartData, coinName = '' }: Props) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: `${coinName} price chart`,
			},
		},
	};

	const labels = chartData.map((item, idx) => idx);
	const data = {
		labels,
		datasets: [
			{
				fill: true,
				data: chartData.map(item => item),
				pointRadius: 0,
				backgroundColor: 'rgba(88,237,183,.5)',
				borderColor: 'rgba(88,237,183,1)',
				tension: 0.1,
			},
		],
	};
	return (
		<div className=''>
			<Line className='' options={options} data={data} />
		</div>
	);
};

export default SparklineChart;
