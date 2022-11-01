import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import App from "@/Layouts/App"
import { VscCloudDownload } from "react-icons/vsc";
import WelcomeBanner from './WelcomeBanner';
import DashboardAvatars from './DashboardAvatars';
import TemperatureHumidity from './TemperatureHumidity';

import Statistics from './Statistics';
import PieChart from '@/Components/Charts/PieChart';
import BarChart from '@/Components/Charts/BarChart';

import { ThreeCircles } from "react-loader-spinner";
import ReactHowler from 'react-howler';
import { WelcomeContext } from '@/Utils/WelcomeContext';

const Dashboard = () => {
	let alarm = './files/sound.mp3';
	const { data } = usePage().props

	const [dataset, setDataset] = useState({
		pie: {
			series: [],
			labels: [],
		},
		bar: {
			series: [],
			categories: [],
		},
		temp: {
			data: []
		},
	})

	const [isLoading, setIsLoading] = useState(false)
	const [fireDetected, setFireDetected] = useState(false)
	const [welcome, setWelcome] = useContext(WelcomeContext)

	const params = {
		weather: {
			d: true,
		}
	}

	const getData = async () => {
		setIsLoading(true)
		const solver = await axios.get(route("dashboard"), { params })
			.then((response) => response.data)
			.then((data) => setDataset(data))
			.catch((e) => alert(e.message))

		setIsLoading(false)
	}

	useEffect(() => {
		getData()
		const interval = setInterval(() => { setWelcome(false); getData() }, 10000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!dataset.temp.data) {
			let fire = Object.values(dataset.temp.data)[0].fire_status
			if (fire.id === 1) setFireDetected(true)
		} else setFireDetected(false)
	}, [dataset.temp])

	return (

		<main className='container mx-1'>
			<ReactHowler
				src={alarm}
				playing={fireDetected}
			/>

			<WelcomeBanner showNote={welcome} />

			<div className="flex justify-between items-center">

				<DashboardAvatars users={data && data.users} />

				<div className="bg-white md:border border-slate-200 hover:border-slate-300 text-green-500 shadow-sm transition duration-150 ml-2">
					{<InertiaLink
						className="flex justify-center items-center bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-0 focus:outline-none"
						href={route('report.create')}
					>
						<VscCloudDownload />
						<span className="hidden md:inline ml-2"> Generate Report</span>
					</InertiaLink>}
				</div>

			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
				<div className="sm:row-span-1 col-span-3">
					<div className="flex flex-wrap">
						<Statistics props={data} />
					</div>
				</div>
				<div className="sm:row-span-1 col-span-1">
					<TemperatureHumidity className="shadow-lg border-2 border-green-400" temperature={dataset.temp} />
				</div>
			</div>

			<div className=' flex flex-col justify-center items-center'>
				{
					isLoading && <ThreeCircles
						height="100"
						width="100"
						color="#4fa94d"
						wrapperStyle={{}}
						wrapperClass=""
						visible={isLoading}
						ariaLabel="three-circles-rotating"
						outerCircleColor=""
						innerCircleColor=""
						middleCircleColor=""
					/>
				}
			</div>

			{!isLoading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
				<div className='sm:row-span-1 col-span-2'>
					<div className="rounded overflow-hidden shadow-lg border-2 border-green-400">
						{

							dataset.bar && <BarChart data={dataset.bar} title="Tree Population" />
						}
					</div>
				</div>
				<div className='sm:row-span-1 col-span-2'>
					<div className="rounded overflow-hidden shadow-lg border-2 border-green-400">
						<PieChart data={dataset.pie} title="Soil Lab Sessions" />
					</div>
				</div>
			</div>}

		</main>

	);
};

Dashboard.layout = page => <App title="Dashboard" children={page} />;

export default Dashboard;
