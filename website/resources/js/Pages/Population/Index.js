import React from 'react'
import App from '@/Layouts/App';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

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


	</>
}

Index.layout = page => <App title="Population" children={page} />;

export default Index;