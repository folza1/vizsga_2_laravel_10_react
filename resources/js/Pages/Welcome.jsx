import {Link, Head} from '@inertiajs/react';
import Form from 'react-bootstrap/Form';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FormGroupExample() {

    const { countries } = usePage().props;
    const [countryOptions, setCountryOptions] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');



    useEffect(() => {
        if (countries && countries.original && countries.original.countries) {
            const options = countries.original.countries.map(country => (
                <option key={country.id} value={country.id}>
                    {country.name}
                </option>
            ));
            setCountryOptions(options);
        }
    }, [countries]);

    useEffect(() => {
        // Ha van kiválasztott ország
        if (selectedCountry) {
            // Küldd el a kiválasztott ország ID-t a szervernek
            fetch(`/api/cities/${selectedCountry}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);  // Naplózza a választ a konzolon
                    setCities(data);
                })
                .catch(error => console.error('Error fetching cities:', error));
        }
    }, [selectedCountry]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            country: e.target.country.value,
            city: e.target.city.value,
            tel: e.target.tel.value,
            birth: e.target.birth.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value,
            gender: e.target.gender.value,
            acceptTerms: e.target.acceptTerms.checked,
        };

        try {
            const response = await axios.post('/registermy', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Registration successful:', response.data);
                // Átirányítás a /login oldalra
                window.location.href = '/login';
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            if (error.response) {
                console.error('Registration failed with status:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                console.error('Request failed:', error.request);
            } else {
                console.error('Error during registration:', error.message);
            }
        }
    };




    return (
        <>
            <h1 className="text-center my-3">Regisztráció</h1>
            <Form onSubmit={handleSubmit} className="border p-4 w-1/2 mx-auto">
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupName">
                        <Form.Label className="text-2xl">Név</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Hogy hívnak" required/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupEmail">
                        <Form.Label className="text-2xl">Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email címed" required/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupSelect1">
                        <Form.Label className="text-2xl">Ország</Form.Label>
                        <Form.Select aria-label="Default select example"
                                     name="country"
                                     onChange={(e) => setSelectedCountry(e.target.value)}
                                     required
                        >
                            <option>Open this select menu</option>
                            {countryOptions}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupSelect2">
                        <Form.Label className="text-2xl">Város</Form.Label>
                        <Form.Control
                            list="cities"
                            name="city"
                            placeholder="Válaszd ki a várost"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            required
                        />
                        <datalist id="cities">
                            {cities.map(city => (
                                <option key={city.id} value={city.name}/>
                            ))}
                        </datalist>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPhone">
                        <Form.Label className="text-2xl">Telefonszám</Form.Label>
                        <Form.Control type="tel" name="tel" placeholder="Telefonszám" required/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupBirthdate">
                        <Form.Label className="text-2xl">Születési dátum:</Form.Label>
                        <Form.Control type="date" name="birth" placeholder="Születési idő" required/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPassword">
                        <Form.Label className="text-2xl">Jelszó</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Jelszó" required/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPasswordConfirmation">
                        <Form.Label className="text-2xl">Jelszó megerősítése</Form.Label>
                        <Form.Control type="password" name="password_confirmation" placeholder="Jelszó megerősítése" required/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 mx-3" controlId="formGroupRadioGroup">
                        <Form.Label className="text-2xl">Nemed:</Form.Label>
                        <div>
                            <Form.Check type="radio" label="Férfi" id="male" value="male" name="gender" required/>
                            <Form.Check type="radio" label="Nő" id="female" value="female" name="gender" required/>
                            <Form.Check type="radio" label="Egyéb" id="other" value="other" name="gender" required/>
                        </div>
                    </Form.Group>
                </div>

                <div className="mb-6">
                    <Form.Group className="mb-3 mx-3" controlId="formGroupAcceptTerms">
                        <Form.Check
                            type="checkbox"
                            label="Elfogadom a felhasználási feltételeket"
                            name="acceptTerms"
                            required
                        />
                    </Form.Group>
                </div>

                <div className="mx-3">
                    <PrimaryButton className="w-full">Regisztráció</PrimaryButton>
                </div>

                <div className="flex flex-col justify-center mt-6">
                    <a className="block  mx-auto" href="/forgotten_pass">Elfelejtetted a jelszavad?</a>
                    <a className="block  mx-auto" href="/login">Már regisztráltál?</a>
                </div>
            </Form>
        </>
    );
}
