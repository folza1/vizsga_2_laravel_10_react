import { Link, Head } from '@inertiajs/react';
import Form from 'react-bootstrap/Form';
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function FormGroupExample() {
    return (
        <>
            <h1 className="text-center my-5">Regisztráció</h1>
            <Form className="border p-4 w-1/2 mx-auto">
                <div className="flex mx-auto">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupName">
                        <Form.Label>Név</Form.Label>
                        <Form.Control type="text" placeholder="Hogy hívnak"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email címed"/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupSelect1">
                        <Form.Label>Ország</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupSelect2">
                        <Form.Label>Város</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="flex mx-auto">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPhone">
                        <Form.Label>Telefonszám</Form.Label>
                        <Form.Control type="tel" placeholder="Telefonszám"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupBirthdate">
                        <Form.Label>Születési dátum:</Form.Label>
                        <Form.Control type="date" placeholder="Születési idő"/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPassword">
                        <Form.Label>Jelszó</Form.Label>
                        <Form.Control type="password" placeholder="Jelszó"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPasswordConfirmation">
                        <Form.Label>Jelszó megerősítése</Form.Label>
                        <Form.Control type="password" placeholder="Jelszó megerősítése"/>
                    </Form.Group>
                </div>
                <div className="flex mx-auto">
                    <Form.Group className="mb-3 mx-3" controlId="formGroupRadioGroup">
                        <Form.Label>Nemed:</Form.Label>
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
            </Form>
        </>
    );
}
