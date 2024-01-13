import {Link, Head} from '@inertiajs/react';
import Form from 'react-bootstrap/Form';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function FormGroupExample() {

    const { countries } = usePage().props;
    const [countryOptions, setCountryOptions] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');


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





    return (
        <>
            <h1 className="text-center my-5">Regisztráció</h1>
            <Form className="border p-4 w-1/2 mx-auto">
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupName">
                        <Form.Label className="text-2xl">Név</Form.Label>
                        <Form.Control type="text" placeholder="Hogy hívnak"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupEmail">
                        <Form.Label className="text-2xl">Email</Form.Label>
                        <Form.Control type="email" placeholder="Email címed"/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupSelect1">
                        <Form.Label className="text-2xl">Ország</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => setSelectedCountry(e.target.value)}>
                            <option>Open this select menu</option>
                            {countryOptions}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupSelect2">
                        <Form.Label className="text-2xl">Város</Form.Label>
                        <Form.Control
                            list="cities"
                            placeholder="Válaszd ki a várost"
                            onChange={(e) => setSelectedCity(e.target.value)}
                        />
                        <datalist id="cities">
                            {cities.map(city => (
                                <option key={city.id} value={city.name} />
                            ))}
                        </datalist>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPhone">
                        <Form.Label className="text-2xl">Telefonszám</Form.Label>
                        <Form.Control type="tel" placeholder="Telefonszám"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupBirthdate">
                        <Form.Label className="text-2xl">Születési dátum:</Form.Label>
                        <Form.Control type="date" placeholder="Születési idő"/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPassword">
                        <Form.Label className="text-2xl">Jelszó</Form.Label>
                        <Form.Control type="password" placeholder="Jelszó"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPasswordConfirmation">
                        <Form.Label className="text-2xl">Jelszó megerősítése</Form.Label>
                        <Form.Control type="password" placeholder="Jelszó megerősítése"/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto mb-6">
                    <Form.Group className="mb-3 mx-3" controlId="formGroupRadioGroup">
                        <Form.Label className="text-2xl">Nemed:</Form.Label>
                        <div>
                            <Form.Check type="radio" label="Férfi" id="male" name="gender"/>
                            <Form.Check type="radio" label="Nő" id="female" name="gender"/>
                            <Form.Check type="radio" label="Egyéb" id="other" name="gender"/>
                        </div>
                    </Form.Group>
                </div>
                <div className="mx-3">
                    <PrimaryButton className="w-full">Regisztráció</PrimaryButton>
                </div>
                <div>
                    <a className="block" href="/forgotten_pass">Elfelejtetted a jelszavad?</a>
                    <a className="block" href="/login">Már regisztráltál?</a>
                </div>
            </Form>
        </>
    );
}
