import React from 'react';
import styled from 'styled-components';
import IconBtn from '../components/Buttons/IconBtn';
import PopupBtn from '../components/Buttons/PopupBtn'

const Container = styled.div`
    margin:5rem;
`

const Test = () => {
    return (
        <Container>
            <PopupBtn
              title={"Test"}
              size={"L"}
              button={
                <IconBtn
                type={"secondary"}
                >
                  <i className="fas fa-heart"></i>
                </IconBtn>
              }
            >
            </PopupBtn>
        </Container>
    );
};

export default Test;