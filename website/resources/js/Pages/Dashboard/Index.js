import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import App from "@/Layouts/App"

const Dashboard = () => {
	return (
		<div>
			<h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
			<p className="mb-12 leading-normal">
				Hey there! Welcome to Ping CRM, a demo app designed to help illustrate
				how
				<a
					className="mx-1 text-indigo-600 underline hover:text-orange-500"
					href="https://inertiajs.com"
				>
					Inertia.js
				</a>
				works with
				<a
					className="ml-1 text-indigo-600 underline hover:text-orange-500"
					href="https://reactjs.org/"
				>
					React
				</a>
				.
			</p>
			<div>
				<InertiaLink className="mr-1 btn-indigo" href="/500">
					500 error
				</InertiaLink>
				<InertiaLink className="btn-indigo" href="/404">
					404 error
				</InertiaLink>
			</div>
		</div>
	);
};

Dashboard.layout = page => <App title="Dashboard" children={page} />;

export default Dashboard;
