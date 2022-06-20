import React from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import LoadingButton from '@/Components/LoadingButton';
import TextInput from '@/Components/TextInput';
import Guest from '@/Layouts/Guest';

export default () => {
    const { data, setData, errors, post, processing } = useForm({
        email: '',
        password: '',
        remember: true
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <Guest>
            <Head title="Login" />

            <form
                onSubmit={handleSubmit}
                className="mt-4 overflow-hidden bg-white rounded-lg shadow-xl"
            >
                <div className="px-10 py-12">
                    <h1 className="text-3xl font-bold text-center text-gray-600">Nkhalango Monitoring System</h1>
                    <div className="w-24 mx-auto mt-6 border-b-2" />
                    <TextInput
                        className="mt-10 min-w-full"
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter email or username"
                        errors={errors.email}
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                    />
                    <TextInput
                        className="mt-6"
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        errors={errors.password}
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                    />
                    <label
                        className="flex items-center mt-6 select-none"
                        htmlFor="remember"
                    >
                        <input
                            name="remember"
                            id="remember"
                            className="mr-1"
                            type="checkbox"
                            checked={data.remember}
                            onChange={e => setData('remember', e.target.checked)}
                        />
                        <span className="text-sm">Remember Me</span>
                    </label>
                </div>
                <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
                    <Link href={route('password.request')} className="text-sm text-gray-600 hover:text-gray-900">
                        Forgot password?
                    </Link>

                    <LoadingButton
                        type="submit"
                        loading={processing}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    >
                        Login
                    </LoadingButton>
                </div>
            </form>
        </Guest>
    );
};
