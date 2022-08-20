import React from 'react';

import styled from 'styled-components';
import { Button } from '../../components/Button';

export const Main = () => {
    return (
        <Container>
            <h1>INIT</h1>
            <Button>HELLO!</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    color: white;
    background-color: #131a22;
`;
