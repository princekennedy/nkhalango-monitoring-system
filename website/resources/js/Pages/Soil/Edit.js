import LoadingButton from '@/Components/LoadingButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import App from '@/Layouts/App'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { VscTypeHierarchySub } from 'react-icons/vsc'

const Edit = () => {
	const { soil } = usePage().props;

	const { data, setData, errors, post, processing } = useForm({
		_method: "PUT",

		name: soil.name ?? '',
		description: soil.description ?? '',
		texture: soil.texture ?? '',
		porosity: soil.porosity ?? '',
		chemistry: soil.chemistry ?? '',
		colour: soil.colour ?? '',
		structure: soil.structure ?? '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		post(route('soil.update', soil.id));
	}

	return <>
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-3xl font-bold">
				<InertiaLink
					href={route('soil.index')}
					className="text-indigo-600 hover:text-indigo-700"
				>
					Soils
				</InertiaLink>
				<span className="font-medium text-indigo-600"> /</span> Edit
			</h1>

			<InertiaLink
				className="text-green-700 focus:outline-none flex"
				href={route('soil.index')}
			>
				<VscTypeHierarchySub className="mr-2 mt-1" />
				<span className='hidden md:inline'>All Soils</span>
			</InertiaLink>

		</div>

		<div className="max-w-3xl overflow-hidden bg-white rounded shadow">
			<form onSubmit={handleSubmit} autoComplete="off">
				<div className="p-8 -mb-8 -mr-6">
					<TextInput
						className="w-full pb-8 pr-6"
						label="Name of Soil (Type)"
						name="name"
						type="text"
						errors={errors.name}
						value={data.name}
						onChange={e => setData('name', e.target.value)}
					/>

					<div className='flex flex-wrap'>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Soil Texture"
							name="texture"
							type="text"
							errors={errors.texture}
							value={data.texture}
							onChange={e => setData('texture', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Soil Structure"
							name="structure"
							type="text"
							errors={errors.structure}
							value={data.structure}
							onChange={e => setData('structure', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Soil Porosity"
							name="porosity"
							type="text"
							errors={errors.porosity}
							value={data.porosity}
							onChange={e => setData('porosity', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Soil Chemistry"
							name="chemistry"
							type="text"
							errors={errors.chemistry}
							value={data.chemistry}
							onChange={e => setData('chemistry', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Soil Colour"
							name="colour"
							type="text"
							errors={errors.colour}
							value={data.colour}
							onChange={e => setData('colour', e.target.value)}
						/>
					</div>

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