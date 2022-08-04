import React from 'react'

import App from '@/Layouts/App';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';
import { VscAdd, VscArrowRight } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';

const Soil = () => {
	const { soils } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = soils;

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">Soils</h1>
			<InertiaLink
				className="text-green-700 focus:outline-none flex"
				href={route('soil.create')}
			>
				<VscAdd className="mr-2 mt-1" />
				<span className="hidden md:inline">Add Soil</span>
			</InertiaLink>
		</div>
		<div className="overflow-x-auto bg-white rounded shadow">
			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Name</th>
						<th className="px-6 pt-5 pb-4">Texture</th>
						<th className="px-6 pt-5 pb-4">Colour</th>
						<th className="px-6 pt-5 pb-4">
							<FiMenu />
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(soil => {
						const id = soil.id,
							name = soil.name,
							colour = soil.colour,
							texture = soil.texture,
							porosity = soil.porosity,
							chemistry = soil.chemistry,
							structure = soil.structure,
							description = soil.description

						return (
							<tr
								key={id}
								className="hover:bg-gray-100 focus-within:bg-gray-100"
							>

								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('soil.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{name}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('soil.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{texture}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('soil.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{colour}
									</InertiaLink>
								</td>
								<td className="w-px border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('soil.edit', id)}
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
								No users found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
		<Pagination links={links} />
	</>
}

Soil.layout = page => <App title="Soils" children={page} />;

export default Soil;