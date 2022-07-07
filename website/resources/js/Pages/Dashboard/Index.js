import React, { useEffect, useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import App from "@/Layouts/App"

import { VscCloudDownload } from "react-icons/vsc";
import WelcomeBanner from './WelcomeBanner';
import DashboardAvatars from './DashboardAvatars';
import TemperatureHumidity from './TemperatureHumidity';

import Chart from 'react-apexcharts'
import ChartSettings from './ChartSettings';
import Statistics from './Statistics';


const Dashboard = () => {

	const [barDataset, setBarDataset] = useState([])
	const [pieDataset, setPieDataset] = useState([])
	const { data } = usePage().props;


	useEffect(() => {
		setBarDataset(data.pie)
		setPieDataset(data.bar)
	}, [data])

	return (<>

		<main className='container mx-1'>
			<WelcomeBanner />

			<div className="flex justify-between items-center">

				<DashboardAvatars />

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
						<Statistics props={data.statistics} />
					</div>
				</div>
				<div className="sm:row-span-1 col-span-1">
					<TemperatureHumidity className="shadow-lg border-2 border-green-400" />
				</div>
			</div>


			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
				<div className='sm:row-span-1 col-span-2'>
					<div className="rounded overflow-hidden shadow-lg border-2 border-green-400">
						<Chart
							options={ChartSettings.bar}
							series={barDataset}
							type="bar"
							width="100%"
							height="350px"
							className="pt-5"
						/>
					</div>
				</div>


				<div className='sm:row-span-1 col-span-2'>
					<div className="rounded overflow-hidden shadow-lg border-2 border-green-400">
						<Chart
							options={ChartSettings.pie}
							series={pieDataset}
							type="pie"
							width="100%"
							height="350px"
							className="pt-5"
						/>
					</div>
				</div>
			</div>

		</main>

	</>);
};

Dashboard.layout = page => <App title="Dashboard" children={page} />;

export default Dashboard;
