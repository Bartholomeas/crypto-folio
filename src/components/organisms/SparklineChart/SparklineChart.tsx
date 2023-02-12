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
import { convertDate } from "../../../utils/convertUtils";

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

function SparklineChart({ chartData }: Props) {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const labels = chartData.map((item) => convertDate(item[0], "MM-dd-yyyy"));
	const data = {
		labels,
		datasets: [
			{
				fill: true,
				data: chartData.map((item) => item[4]),
				pointRadius: 0,
				backgroundColor: "rgba(88,237,183,.5)",
				borderColor: "rgba(88,237,183,1)",
				tension: 0.1,
			},
		],
	};
	return <Line className="" options={options} data={data} />;
}

export default SparklineChart;
