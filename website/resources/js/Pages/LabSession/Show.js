import React from "react";
import { Inertia } from "@inertiajs/inertia";
import App from "@/Layouts/App";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { VscArrowRight, VscTrash, VscTypeHierarchySub } from "react-icons/vsc";
import TextInput from "@/Components/TextInput";

const Show = () => {
	const { session } = usePage().props;

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">
				<InertiaLink
					href={route('lab-session.index')}
					className="text-indigo-600 hover:text-indigo-700"
				>
					Lab Sessions
				</InertiaLink>
				<span className="font-medium text-indigo-600"> /</span> Details
			</h1>

			<InertiaLink
				className="text-green-700 focus:outline-none flex"
				href={route('lab-session.index')}
			>
				<VscTypeHierarchySub className="mr-2 mt-1" />
				<span className='hidden md:inline'>All Lab Sessions</span>
			</InertiaLink>

		</div>

		<div className="overflow-hidden bg-white rounded shadow">
			<form>
				<div className="flex flex-wrap p-8 -mb-8 -mr-6">
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Name"
						value={session.soil.name}
						disabled="disabled"
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Texture"
						value={session.soil.texture}
						disabled="disabled"
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Porosity"
						value={session.soil.porosity}
						disabled="disabled"
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Chemistry"
						value={session.soil.chemistry}
						disabled="disabled"
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Colour"
						value={session.soil.colour}
						disabled="disabled"
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Structure"
						value={session.soil.structure}
						disabled="disabled"
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Description"
						value={session.soil.description}
						disabled="disabled"
					/>
				</div>
			</form>
		</div>

		<h2 className="mt-12 text-2xl font-bold">Best Tree Species</h2>

		<div className="mt-6 overflow-x-auto bg-white rounded shadow">
			<table className="w-full whitespace-nowrap">
				<thead>
					<tr className="font-bold text-left">
						<th className="px-6 pt-5 pb-4">Name</th>
						<th className="px-6 pt-5 pb-4">Status</th>
						<th className="px-6 pt-5 pb-4" colSpan="2">
							Description
						</th>
					</tr>
				</thead>
				<tbody>
					{session.species.map(
						({ id, name, status, description, deleted_at }) => {
							return (
								<tr
									key={id}
									className="hover:bg-gray-100 focus-within:bg-gray-100"
								>
									<td className="border-t">
										<InertiaLink
											href={route('tree-species.edit', id)}
											className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
										>
											{name}
											{deleted_at && (
												<VscTrash className="block w-6 h-6 text-gray-700 fill-current" />
											)}
										</InertiaLink>
									</td>
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
											{description}
										</InertiaLink>
									</td>
									<td className="w-px border-t">
										<InertiaLink
											tabIndex="-1"
											href={route('tree-species.edit', id)}
											className="flex items-center px-4"
										>
											<VscArrowRight className="block w-6 h-6 text-gray-700 fill-current"
											/>
										</InertiaLink>
									</td>
								</tr>
							);
						}
					)}

					{session.species.length === 0 && (
						<tr>
							<td className="px-6 py-4 border-t" colSpan="4">
								No contacts found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>

	</>
}

Show.layout = page => <App children={page} title="Lab Session Details" />

export default Show;