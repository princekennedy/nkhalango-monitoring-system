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

const Dashboard = () => {
	return (<>

		<main>
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

			<div className="grid grid-cols-3 grid-rows-2 gap-3 mt-4">
				<div className="col-span-2 row-span-2 rounded-none">
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
				<div className="row-span-2 rounded-none">
					<TemperatureHumidity />
				</div>
			</div>

		</main>

	</>);
};

Dashboard.layout = page => <App title="Dashboard" children={page} />;

export default Dashboard;
