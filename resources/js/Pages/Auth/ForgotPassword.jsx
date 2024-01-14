import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, useForm} from '@inertiajs/react';
import React from "react";

export default function ForgotPassword({status}) {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Elfelejtett Jelszó"/>

            <h1 className="text-center my-3">Elfelejtett Jelszó</h1>

            <div className="border p-4 w-1/3 mx-auto mt-8">
                <div className="mb-4 text-sm text-gray-600">
                    Elfelejtette a jelszavát? Nem probléma. Csak add meg az email címed és mi küldünk egy linket amivel
                    visszaálíthatod!
                </div>

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2"/>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Jelszó visszaállító link küldése
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
