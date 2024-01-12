import {Link, Head} from '@inertiajs/react';
import Form from 'react-bootstrap/Form';


function FormGroupExample() {
    return (
        <>
            <h1 className="text-center my-5">Regisztráció</h1>
            <Form className="border mx-auto p-3">
                <div className="flex w-1/2 mx-auto">
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-1/2 mx-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                </div>
            </Form>
        </>
    );
}

export default FormGroupExample;

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     return (
//         <>
//             <Head title="Vizsga"/>
//             {/*<div>*/}
//             {/*    {auth.user ? (*/}
//             {/*        <Link*/}
//             {/*            href={route('dashboard')}*/}
//             {/*        >*/}
//             {/*            Dashboard*/}
//             {/*        </Link>*/}
//             {/*    ) : (*/}
//             {/*        <>*/}
//             {/*            <Link*/}
//             {/*                href={route('login')}*/}
//             {/*            >*/}
//             {/*                Log in*/}
//             {/*            </Link>*/}
//
//             {/*            <Link*/}
//             {/*                href={route('register')}*/}
//             {/*            >*/}
//             {/*                Register*/}
//             {/*            </Link>*/}
//             {/*        </>*/}
//             {/*    )}*/}
//             {/*</div>*/}
//
//         </>
//     );
// }
