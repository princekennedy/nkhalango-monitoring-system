import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import App from "@/Layouts/App"

import { VscCloudDownload } from "react-icons/vsc";
import WelcomeBanner from './WelcomeBanner';
import DashboardAvatars from './DashboardAvatars';

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

			{/* Cards */}
			<div className="grid grid-cols-12 gap-6">

				{/* <DashboardCard01 />
							<DashboardCard02 />
							<DashboardCard03 />
							<DashboardCard04 />
							<DashboardCard05 />
							<DashboardCard06 />
							<DashboardCard07 />
							<DashboardCard08 />
							<DashboardCard09 />
							<DashboardCard10 />
							<DashboardCard11 />
							<DashboardCard12 />
							<DashboardCard13 /> */}

			</div>
		</main>

	</>);
};

Dashboard.layout = page => <App title="Dashboard" children={page} />;

export default Dashboard;
