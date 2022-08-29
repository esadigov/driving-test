import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CatchClause } from 'typescript';

import { Button } from '../../../components/Button';
import { ISignUpFormData, signup } from '../../../core/services/auth-service';
import { Error } from '../../../shared/ErrorPopup';


export const SignUp = () => {
    const [errorModal, setErrorModal] = useState<boolean>(false)
    const [formData, setFormData] = useState<ISignUpFormData>({
        name: '',
        email: '',
        password: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });


    // useEffect(() => {
    // }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signup(formData)
    }

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit}>
                <Heading>Sign Up</Heading>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={onChange}
                />
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={onChange}
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={onChange}
                />
                <Button type='submit'>SIGN UP</Button>
                <div>
                    <div>
                        <a href="/signin">
                            Already have an account?
                        </a>
                    </div>
                </div>
            </LoginForm>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #131a22;
`;

const Heading = styled.h2`
    margin-bottom: 60px;
    color: #322775;
    font-weight: 700;
    font-size: 32px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    transition: all 0.6s ease-in-out;
    min-width: 600px;
    max-width: 800px;
    align-items: center;
    padding: 99px;
    background-color: #ffffff;
`;

const Input = styled.input`
    width: 100%;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 16px 22px;
    margin-bottom: 10px;
`;

// const Grid = styled.a