import React from 'react'

import App from '@/Layouts/App';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { VscAdd, VscArrowRight } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';

const TreeSpecies = () => {
	const { species } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = species;

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">Tree Species</h1>
			<InertiaLink
				className="text-green-700 focus:outline-none flex"
				href={route('tree-species.create')}
			>
				<VscAdd className="mr-2 mt-1" />
				<span className="hidden md:inline">Add Tree Species</span>
			</InertiaLink>
		</div>
		<div className="overflow-x-auto bg-white rounded shadow">
			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Name</th>
						<th className="px-6 pt-5 pb-4">Suitable Soil</th>
						<th className="px-6 pt-5 pb-4">Status</th>
						<th className="px-6 pt-5 pb-4">
							<FiMenu />
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(species => {
						const id = species.id,
							name = species.name,
							soil = species.soil.name,
							status = species.status.name

						return (
							<tr
								key={id}
								className="hover:bg-gray-100 focus-within:bg-gray-100"
							>

								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('tree-species.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{name}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('tree-species.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{soil}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('tree-species.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{status}
									</InertiaLink>
								</td>
								<td className="w-px border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('tree-species.edit', id)}
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
								No tree species found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	</>
}

TreeSpecies.layout = page => <App title="Tree Species" children={page} />;

export default TreeSpecies;