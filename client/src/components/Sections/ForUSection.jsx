import React from 'react';
import styled from 'styled-components';
import Foryou from '../Foryou';

const Container = styled.div`
    background:var(--darkgray-color);
    width:100vw;
`

const ForUSection = () => {
    return (
        <Container>
            <Foryou/>
        </Container>
    );
};

export default ForUSection;