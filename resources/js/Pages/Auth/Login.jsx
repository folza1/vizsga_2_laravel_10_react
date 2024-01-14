import React, {useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <h1 className="text-center my-3">Bejelentkezés</h1>
            <Form onSubmit={submit} className="border p-4 w-1/3 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email címed</Form.Label>
                    <Form.Control placeholder="név@példa.com"
                                  id="email"
                                  type="email"
                                  name="email"
                                  value={data.email}
                                  className="mt-1 block w-full"
                                  autoComplete="username"
                                  isFocused={true}
                                  onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control placeholder="*********"
                                  id="password"
                                  type="password"
                                  name="password"
                                  value={data.password}
                                  className="mt-1 block w-full"
                                  autoComplete="current-password"
                                  onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2"/>
                </Form.Group>
                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Elfelejtetted a jelszavad?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Bejelentkezés
                    </PrimaryButton>
                </div>
            </Form>
        </>
    )
        ;
}
