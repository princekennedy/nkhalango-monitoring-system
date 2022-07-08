import DeleteButton from '@/Components/DeleteButton'
import FileInput from '@/Components/FileInput'
import LoadingButton from '@/Components/LoadingButton'
import SelectInput from '@/Components/SelectInput'
import TextInput from '@/Components/TextInput'
import TrashedMessage from '@/Components/TrashedMessage'
import App from '@/Layouts/App'
import { Inertia } from '@inertiajs/inertia'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'


const Edit = () => {

	const { user } = usePage().props;
	const { data, setData, errors, post, processing } = useForm({
		_method: "PUT",

		first_name: user.first_name ?? '',
		last_name: user.last_name ?? '',
		email: user.email ?? '',
		avatar: user.avatar ?? '',
		password: '',
	})

	// set doc title
	const title = (`${data.first_name} ${data.last_name}`)
		.toLocaleUpperCase();

	document.title = title

	function handleSubmit(e) {
		e.preventDefault();
		post(route('user.update', user.id));
	}

	function destroy() {
		if (confirm('Are you sure you want to delete this user?')) {
			Inertia.delete(route('user.destroy', user.id));
		}
	}

	function restore() {
		if (confirm('Are you sure you want to restore this user?')) {
			Inertia.put(route('user.restore', user.id));
		}
	}

	return <>
		<div className="flex justify-start max-w-lg mb-8">
			<h1 className="text-3xl font-bold">
				<InertiaLink
					href={route('user.index')}
					className="text-indigo-600 hover:text-indigo-700"
				>
					Users
				</InertiaLink>
				<span className="mx-2 font-medium text-indigo-600">/</span>
				{title}
			</h1>
			{user.avatar && (
				<img className="block w-8 h-8 ml-4 rounded-full" src={user.avatar} />
			)}
		</div>
		{user.deleted_at && (
			<TrashedMessage onRestore={restore}>
				This user has been deleted.
			</TrashedMessage>
		)}
		<div className="max-w-3xl overflow-hidden bg-white rounded shadow">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-wrap p-8 -mb-8 -mr-6">
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						type="text"
						label="First Name"
						name="first_name"
						errors={errors.first_name}
						value={data.first_name}
						onChange={e => setData('first_name', e.target.value)}
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						type="text"
						label="Last Name"
						name="last_name"
						errors={errors.last_name}
						value={data.last_name}
						onChange={e => setData('last_name', e.target.value)}
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Email"
						name="email"
						type="email"
						errors={errors.email}
						value={data.email}
						onChange={e => setData('email', e.target.value)}
					/>
					<TextInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Password"
						name="password"
						type="password"
						errors={errors.password}
						value={data.password}
						onChange={e => setData('password', e.target.value)}
					/>
					<SelectInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Owner"
						name="owner"
						errors={errors.owner}
						value={data.owner}
						onChange={e => setData('owner', e.target.value)}
					>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</SelectInput>
					<FileInput
						className="w-full pb-8 pr-6 lg:w-1/2"
						label="Avatar"
						name="avatar"
						accept="image/*"
						errors={errors.avatar}
						value={data.avatar}
						onChange={avatar => setData('avatar', avatar)}
					/>
				</div>
				<div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
					{!user.deleted_at && (
						<DeleteButton onDelete={destroy}>
							Delete User
						</DeleteButton>
					)}
					<LoadingButton
						loading={processing}
						type="submit"
						className="ml-auto btn-indigo"
					>
						Update User
					</LoadingButton>
				</div>
			</form>
		</div>
	</>
}

Edit.layout = page => <App children={page} title={document.title} />

export default Edit;