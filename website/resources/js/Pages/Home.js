import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/Guest';

const Home = () => {
	return (
		<>
			<InertiaLink className="btn-indigo" href="/login">
				Login
			</InertiaLink>
		</>
	)
}

Home.layout = page => <Guest title="Home" children={page} />

export default Home;