import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../../components/Button';
import { ILoginFormData, login } from '../../../core/services/auth-service';

import { useNavigate } from "react-router-dom";

import { LockClosedIcon } from '@heroicons/react/20/solid'
import { ErrorPopup } from '../../../shared/ErrorPopup';


export const SignIn = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<any>()

    const [formData, setFormData] = useState<ILoginFormData>({
        email: '',
        password: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(formData)
            .then(user => {
                if (user.access_token) {
                    localStorage.setItem("user", JSON.stringify(user));
                }
                navigate('/dashboard')
            })
            .catch(error => {
                setError(error.response.data)
            })
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            {/* <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {error && <ErrorPopup message={error?.message} statusCode={error?.statusCode} setError={setError} />}
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                start your 14-day free trial
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="text-sm justify-center ">
                            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Don't have an account?
                            </a>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
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
