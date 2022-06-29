import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import App from "@/Layouts/App"

import { VscAccount, VscCloudDownload } from "react-icons/vsc";
import WelcomeBanner from './WelcomeBanner';
import DashboardAvatars from './DashboardAvatars';
import TemperatureHumidity from './TemperatureHumidity';
import Card from './Card';
import { FiUsers } from 'react-icons/fi';
import { CgFeed, CgTrees } from "react-icons/cg";
import { GoLightBulb } from "react-icons/go";

import Chart from 'react-apexcharts'


const Dashboard = () => {
	const settings = {
		options: {
			title: {
				text: "Forest Population",
				align: 'center',
				margin: 10,
				offsetX: 0,
				offsetY: 0,
				floating: false,
				style: {
					fontSize: '28px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: '#263238'
				},
			},
			colors: ['#2c9747'],
			chart: {
				id: "basic-bar"
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
			},
		},
		series: [
			{
				name: "series-1",
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			}
		]
	};

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
						{
							[{
								icon: <FiUsers />,
								title: "Total Users",
								total: 0
							},
							{
								icon: <CgTrees />,
								title: "Forest Population",
								total: 0
							},
							{
								icon: <CgFeed />,
								title: "Blogs",
								total: 0
							},
							{
								icon: <GoLightBulb />,
								title: "Fire Alerts",
								total: 0
							}
							].map((card, index) => <Card title={card.title} icon={card.icon} total={card.total} key={index} />)
						}
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
							options={settings.options}
							series={settings.series}
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
							options={settings.options}
							series={settings.series}
							type="line"
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
