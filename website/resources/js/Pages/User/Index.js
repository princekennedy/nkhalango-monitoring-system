import React from 'react'

import App from '@/Layouts/App';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import SearchFilter from '@/Components/SearchFilter';
import { VscArrowRight, VscTrash } from 'react-icons/vsc';
import Pagination from '@/Components/Pagination';

const Index = () => {
	const { users } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = users;

	return <>
		<h1 className="mb-8 text-3xl font-bold">Users</h1>
		<div className="flex items-center justify-between mb-6">
			<SearchFilter />
			<InertiaLink
				className="text-green-700 focus:outline-none"
				href={route('user.create')}
			>
				<span>Create</span>
				<span className="hidden md:inline"> User</span>
			</InertiaLink>
		</div>
		<div className="overflow-x-auto bg-white rounded shadow">
			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Name</th>
						<th className="px-6 pt-5 pb-4">Email</th>
						<th className="px-6 pt-5 pb-4" colSpan="2">
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(user => {
						const id = user.id,
							name = user.name,
							avatar = user.avatar,
							email = user.email,
							deleted_at = user.deleted_at,
							status = user.status.name

						return (
							<tr
								key={id}
								className="hover:bg-gray-100 focus-within:bg-gray-100"
							>
								<td className="border-t">
									<InertiaLink
										href={route('user.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
									>
										{avatar && (
											<img
												src={avatar}
												className="block w-5 h-5 mr-2 -my-2 rounded-full"
											/>
										)}
										{name}
										{deleted_at && (
											<VscTrash className="flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current" />
										)}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('user.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{email}
									</InertiaLink>
								</td>
								<td className="border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('user.edit', id)}
										className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
									>
										{status}
									</InertiaLink>
								</td>
								<td className="w-px border-t">
									<InertiaLink
										tabIndex="-1"
										href={route('user.edit', id)}
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

Index.layout = page => <App title="Users" children={page} />;

export default Index;