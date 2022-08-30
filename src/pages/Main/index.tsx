import React, { useEffect, useState } from 'react';
    import styled from 'styled-components';
    import { Button } from '../../components/Button';
import { getCurrentUser, ILoginFormData } from '../../core/services/auth-service';
import testService from '../../core/services/auth-service/test.service';
import { useNavigate } from "react-router-dom";

export const Main = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ILoginFormData>({
        email: '',
        password: '',
    });

    const [user, setUser] = useState<{ user_email: string, user_id: string, access_token: string }>()

    const handleClick = (e: any) => {
        console.log('CURRENT USER', user);
        navigate("/exam")
        
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        // const user = getCurrentUser()
        setUser(getCurrentUser())

    }, [])

    return (
        <Container>
            <div className="container">
                <p>
                    <strong>Token:</strong>{" "}
                    {user?.access_token.substring(0, 20)} ...{" "}
                    {user?.access_token.substr(user?.access_token.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {user?.user_id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {user?.user_email}
                </p>
                {/* <strong>Authorities:</strong>
                <ul>
                    {user?.roles &&
                        user?.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul> */}
            </div>
            <Button onClick={handleClick} >START THE EXAM</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    // background-color: #131a22;
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
