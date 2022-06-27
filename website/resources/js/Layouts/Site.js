import React, { useEffect, useState } from 'react';
import Logo from '@/Components/Logo';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';

export default function Site({ title, children }) {
	const { auth } = usePage().props

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		if (auth.user) setIsLoggedIn(true)
		else setIsLoggedIn(false)
	}, [])

	return (
		<>
			<Head title={title} />


			<nav className="py-5 bg-green-900 text-white sticky top-0 z-10">
				<ul className="flex justify-between px-10">
					<span className="flex">
						<li className="mr-5">
							<InertiaLink>
								Home
							</InertiaLink>
						</li>
						<li className="mr-5">
							<InertiaLink>
								News
							</InertiaLink>
						</li>
					</span>
					<li>
						{
							isLoggedIn ? (
								<InertiaLink
									as="button"
									method="post"
									href={route('logout')}
									className="text-green-400"
								>
									Logout
								</InertiaLink>
							) : (
								<InertiaLink
									href={route('login')}
									className="focus:outline-none hover:text-white">
									Login
								</InertiaLink>
							)
						}
					</li>
				</ul>
			</nav>

		</>
	);
}
