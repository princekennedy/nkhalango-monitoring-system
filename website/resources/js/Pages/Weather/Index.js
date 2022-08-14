import React from 'react'
import App from '@/Layouts/App';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';
import { VscArrowRight } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';
import Moment from 'react-moment';

const Index = () => {
	const { weather } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = weather;

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">
				Weather Updates
			</h1>
		</div>

		<div className="overflow-x-auto bg-white rounded shadow">
			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Temperature</th>
						<th className="px-6 pt-5 pb-4">Humidity</th>
						<th className="px-6 pt-5 pb-4">Fire Status</th>
						<th className="px-6 pt-5 pb-4">Created At</th>
						<th className="px-6 pt-5 pb-4">
							<FiMenu />
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, humidity, temperature, fire_status, created_at }) => {
						/* const id = w.id,
							humidity = w.humidity,
							temperature = w.temperature,
							fire_status = w.fire_status,
							created_at = w.created_at
 */
						return (
							<tr
								key={id}
								className="hover:bg-gray-100 focus-within:bg-gray-100"
							>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('weather.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{temperature} <sup>o</sup>C
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('weather.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{humidity}%
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('weather.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{fire_status.name}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('weather.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										<Moment date={created_at} fromNow />
									</InertiaLink>
								</td>
								<td className="w-px border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('weather.show', id)}
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

Index.layout = page => <App title="Weather updates" children={page} />;

export default Index;