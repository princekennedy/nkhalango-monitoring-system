import React from 'react';
import Logo from '@/Components/Logo';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-gray-200 border-gray-300 border-solid ">
            <div className="w-full max-w-md">
                <InertiaLink
                    href='/'>
                    <Logo className="block w-full max-w-xs mx-auto text-white fill-current"
                        height={125}
                    />
                </InertiaLink>
                {children}
            </div>
        </div>
    );
}
