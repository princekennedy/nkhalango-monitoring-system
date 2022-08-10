import React from 'react'

import App from '@/Layouts/App';
import { usePage } from '@inertiajs/inertia-react';

const TreeSpecies = () => {
	const { species } = usePage().props;

	const {
		data: {
			data
		},
		meta: { links }
	} = species;

	return <>

	</>
}

TreeSpecies.layout = page => <App title="TreeSpecies" children={page} />;

export default TreeSpecies;