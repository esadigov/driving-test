import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../../components/Button';
import { ILoginFormData, login } from '../../../core/services/auth-service';

import { useNavigate } from "react-router-dom";


export const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ILoginFormData>({
        email: '',
        password: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });


    // useEffect(() => {
    // }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await login(formData)
            console.log(data);
            
            // const token: string = user?.data?.access_token
            // localStorage.setItem("token", token)
            // console.log(token);
            // setAuthToken(token)

            // localStorage.setItem("user", user)
            navigate("/dashboard")

        } catch (error) {
            // navigate('/error')

        }
    }

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit}>
                <Heading>LOGIN</Heading>
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
                <Button type='submit'>LOG IN</Button>
                <div>
                    <div>
                        <a href="/signup">
                            Forgot password?
                        </a>
                    </div>
                    <div>
                        <a href="/signup">
                            {"Don't have an account? Sign Up"}
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
