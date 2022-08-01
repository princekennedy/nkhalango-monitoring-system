import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import FileInput from '@/Components/FileInput';
import LoadingButton from '@/Components/LoadingButton';
import App from '@/Layouts/App';
import { VscAccount } from 'react-icons/vsc';

const Create = () => {
	const { data, setData, errors, post, processing } = useForm({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		status: 0,
		avatar: ''
	});

	function handleSubmit(e) {
		e.preventDefault();
		post(route('user.store'));
	}

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-3xl font-bold">
					<InertiaLink
						href={route('user.index')}
						className="text-indigo-600 hover:text-indigo-700"
					>
						Users
					</InertiaLink>
					<span className="font-medium text-indigo-600"> /</span> Create
				</h1>

				<InertiaLink
					className="text-green-700 focus:outline-none flex"
					href={route('user.index')}
				>
					<VscAccount className="mr-2 mt-1 hidden md:inline" />
					<span>All Users</span>
				</InertiaLink>

			</div>

			<div className="max-w-3xl overflow-hidden bg-white rounded shadow">
				<form name="createForm" onSubmit={handleSubmit} autoComplete="off">
					<div className="flex flex-wrap p-8 -mb-8 -mr-6">
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="First Name"
							name="first_name"
							type="text"
							errors={errors.first_name}
							value={data.first_name}
							onChange={e => setData('first_name', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Last Name"
							name="last_name"
							type="text"
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
							label="Account Status"
							name="status"
							errors={errors.status}
							value={data.status}
							onChange={e => setData("0", e.target.value)}
						>
							<option value="1">Active</option>
							<option value="0">Inactive</option>
						</SelectInput>
						<FileInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Avata"
							name="avatar"
							accept="image/*"
							errors={errors.avatar}
							value={data.avatar}
							onChange={avatar => setData('avatar', avatar)}
						/>
					</div>
					<div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
						<LoadingButton
							loading={processing}
							type="submit"
							className="btn-indigo"
						>
							Create User
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
};

Create.layout = page => <App title="Create User" children={page} />;

export default Create;
