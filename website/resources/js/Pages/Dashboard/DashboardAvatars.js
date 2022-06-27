import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default () => {
	const User01 = 'https://preview.cruip.com/mosaic/images/user-36-01.jpg';
	const User02 = 'https://preview.cruip.com/mosaic/images/user-36-02.jpg';
	const User03 = 'https://preview.cruip.com/mosaic/images/user-36-03.jpg';
	const User04 = 'https://preview.cruip.com/mosaic/images/user-36-04.jpg';

	return (
		<ul className="flex flex-wrap md:justify-center sm:justify-start sm:mb-0 -space-x-3 -ml-px">
			<li>
				<InertiaLink className="block" to="#0">
					<img className="w-9 h-9 rounded-full" src={User01} width="36" height="36" alt="User 01" />
				</InertiaLink>
			</li>
			<li>
				<InertiaLink className="block" to="#0">
					<img className="w-9 h-9 rounded-full" src={User02} width="36" height="36" alt="User 02" />
				</InertiaLink>
			</li>
			<li>
				<InertiaLink className="block" to="#0">
					<img className="w-9 h-9 rounded-full" src={User03} width="36" height="36" alt="User 03" />
				</InertiaLink>
			</li>
			<li>
				<InertiaLink className="block" to="#0">
					<img className="w-9 h-9 rounded-full" src={User04} width="36" height="36" alt="User 04" />
				</InertiaLink>
			</li>
			<li>
				<InertiaLink className="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-green-800 shadow-sm transition duration-150 ml-2">
					<span className="sr-only">Add new user</span>
					<svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
						<path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
					</svg>
				</InertiaLink>
			</li>
		</ul>
	);
}