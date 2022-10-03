import React, { useEffect, useState } from 'react';
import Logo from '@/Components/Logo';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';

import '../assets/home.css';
import Header from '@/Pages/Home/Header';
import Hero from '@/Pages/Home/Hero';
import Footer from '@/Pages/Home/Footer';

export default function Site({ title, children }) {
	const { auth } = usePage().props

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		if (auth.user) setIsLoggedIn(true)
		else setIsLoggedIn(false)
	}, [isLoggedIn])

	return (
		<>
			<Head title={title} />
			<Header />
			<Hero />
			{children}
			<Footer />

		</>
	);
}
