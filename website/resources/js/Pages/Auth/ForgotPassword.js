import React from 'react';
import Guest from '@/Layouts/Guest';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import TextInput from '@/Components/TextInput';
import LoadingButton from '@/Components/LoadingButton';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onhandle={handleSubmit}
                className="mt-4 overflow-hidden bg-white rounded-lg shadow-xl"
            >
                <div className="px-10 py-12">
                    <h1 className="text-3xl font-bold text-center text-gray-600">Nkhalango Monitoring System</h1>
                    <div className="w-24 mx-auto mt-6 mb-4 border-b-2" />

                    <div className="mb-4 text-sm text-gray-500 leading-normal">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                        reset link that will allow you to choose a new one.
                    </div>

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

                    <div className="py-4 bg-gray-100 border-t border-gray-200 text-center">
                        <LoadingButton
                            type="submit"
                            loading={processing}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            Email Password Reset Link
                        </LoadingButton>

                        <Link href={route('login')} className="pt-4 text-sm text-gray-600 hover:text-gray-900 block">
                            I already have account? Login
                        </Link>
                    </div>
                </div>
            </form>
        </Guest>
    );
}
