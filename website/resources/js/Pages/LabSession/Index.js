import React from 'react'
import { Inertia } from '@inertiajs/inertia';
import App from '@/Layouts/App';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { FiMenu } from 'react-icons/fi';
import { VscArrowRight } from 'react-icons/vsc';
import Pagination from '@/Components/Pagination';
import Moment from 'react-moment';

const Index = () => {
	const { sessions } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = sessions;

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">Lab Sessions</h1>
		</div>

		<div className="overflow-x-auto bg-white rounded shadow">
			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Soil Type</th>
						<th className="px-6 pt-5 pb-4">Probe Value</th>
						<th className="px-6 pt-5 pb-4">Status</th>
						<th className="px-6 pt-5 pb-4">Created At</th>
						<th className="px-6 pt-5 pb-4">
							<FiMenu />
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(session => {
						const id = session.id,
							soil = session.soil.name,
							probe_value = session.probe_value,
							status = session.status.name,
							date = session.created_at

						return (
							<tr
								key={id}
								className="hover:bg-gray-100 focus-within:bg-gray-100"
							>

								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('lab-session.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{soil}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('lab-session.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{probe_value}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('lab-session.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{status}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('lab-session.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										<Moment date={date} fromNow />
									</InertiaLink>
								</td>
								<td className="w-px border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('lab-session.show', id)}
										className="flex items-center px-4 focus:outline-none"
									>
										<VscArrowRight className="block w-6 h-6 text-gray-700 fill-current"
										/>
									</InertiaLink>
								</td>
							</tr>
						);
					})}

					{data.length === 0 && (
						<tr>
							<td className="px-6 py-4 border-t" colSpan="4">
								No lab sessions found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
		<Pagination links={links} />

	</>
}

Index.layout = page => <App title="Soil lab sessions" children={page} />;

export default Index;