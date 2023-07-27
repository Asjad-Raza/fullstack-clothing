import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/firebase/Firebase.utils';
import FormInput from '../Form-Input/Form-Input.components';
import './Sign-Up-Form.styles.scss'
import Button from '../Button/Button.component';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const { displayName, email, password, confirmPassword } = formFields;
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password does not MAtch');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            console.log(user);

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in Use');
            }
            else {
                console.log('Error Creating User', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };
    return (
        <div className='sign-up-container'>

            <h2>Sign Up With Your Email and Password</h2>
            <form action="" onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required name='displayName' value={displayName} onChange={handleChange} />
                <FormInput label='Email' type="email" required name='email' value={email} onChange={handleChange} />
                <FormInput label='Password' type="password" required name='password' value={password} onChange={handleChange} />
                <FormInput label='Confirm Password' type="password" required name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};
