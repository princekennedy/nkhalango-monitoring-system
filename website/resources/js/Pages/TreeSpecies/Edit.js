import LoadingButton from '@/Components/LoadingButton'
import SelectInput from '@/Components/SelectInput'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import App from '@/Layouts/App'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { VscTypeHierarchySub } from 'react-icons/vsc'

const Edit = () => {
	const { species, soils, statuses } = usePage().props

	const { data, setData, errors, post, processing } = useForm({
		_method: "PUT",

		name: species.name ?? '',
		description: species.description ?? '',
		soil_id: species.soil.id ?? '',
		status_id: species.status.id ?? '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		post(route("tree-species.update", species.id))
	}

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">
				<InertiaLink
					href={route('tree-species.index')}
					className="text-indigo-600 hover:text-indigo-700"
				>
					Tree Species
				</InertiaLink>
				<span className="font-medium text-indigo-600"> /</span> Edit
			</h1>

			<InertiaLink
				className="text-green-700 focus:outline-none flex"
				href={route('tree-species.index')}
			>
				<VscTypeHierarchySub className="mr-2 mt-1" />
				<span className='hidden md:inline'>All Tree Species</span>
			</InertiaLink>

		</div>

		<div className="max-w-3xl overflow-hidden bg-white rounded shadow">
			<form onSubmit={handleSubmit} autoComplete="off">
				<div className="p-8 -mb-8 -mr-6">
					<TextInput
						className="w-full pb-8 pr-6"
						label="Name"
						name="name"
						type="text"
						errors={errors.name}
						value={data.name}
						onChange={e => setData('name', e.target.value)}
					/>

					<SelectInput
						className="pb-8 pr-6"
						name="soil_id"
						label="Suitable soil"
						value={data.soil_id}
						errors={errors.soil_id}
						onChange={e => setData('soil_id', e.target.value)}
					>
						<option value="">Select from the list</option>
						{
							soils.data.map((soil, index) => <option value={soil.id} key={index}>{soil.name}</option>)
						}
					</SelectInput>

					<SelectInput
						className="pb-8 pr-6"
						name="status_id"
						label="Status"
						value={data.status_id}
						errors={errors.status_id}
						onChange={e => setData('status_id', e.target.value)}
					>
						<option value="">Select from the list</option>
						{
							statuses.data.map((status, index) => <option value={status.id} key={index}>{status.name}</option>)
						}
					</SelectInput>

					<TextArea
						className="w-full pb-8 pr-6"
						label="Briefy Description"
						name="description"
						rows="5"
						errors={errors.description}
						value={data.description}
						onChange={e => setData('description', e.target.value)} />

				</div>
				<div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
					<LoadingButton
						loading={processing}
						type="submit"
						className="btn-indigo"
					>
						Update
					</LoadingButton>
				</div>
			</form>
		</div>
	</>
}

Edit.layout = page => <App children={page} />

export default Edit;