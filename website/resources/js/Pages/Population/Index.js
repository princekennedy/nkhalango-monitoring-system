import React from 'react'
import App from '@/Layouts/App';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { FiMenu } from 'react-icons/fi';
import Pagination from '@/Components/Pagination';
import Moment from 'react-moment';
import { VscArrowRight } from 'react-icons/vsc';

const Index = () => {
	const { population } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = population;

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">Population Census</h1>
		</div>

		<Pagination links={links} />

		<div className="overflow-x-auto bg-white rounded shadow  mt-3">

			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Species</th>
						<th className="px-6 pt-5 pb-4">Total</th>
						<th className="px-6 pt-5 pb-4">Created At</th>
						<th className="px-6 pt-5 pb-4">
							<FiMenu />
						</th>
					</tr>
				</thead>
				<tbody>

					{data.map(({ id, species, total, created_at }) => {
						return (
							<tr
								key={id}
								className="hover:bg-gray-100 focus-within:bg-gray-100"
							>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('population.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{species.name}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('population.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{total}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('population.show', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										<Moment date={created_at} fromNow />
									</InertiaLink>
								</td>
								<td className="w-px border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('population.show', id)}
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
								No Population Census found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>

		<Pagination links={links} />

	</>
}

Index.layout = page => <App title="Population" children={page} />;

export default Index;