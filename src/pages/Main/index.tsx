import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';

interface ILoginFormData {
    email: string;
    password: string;
}

export const Main = () => {
    const [formData, setFormData] = useState<ILoginFormData>({
        email: '',
        password: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Container>
            <LoginForm>
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
                <Button>LOG IN</Button>
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

const LoginForm = styled.div`
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
