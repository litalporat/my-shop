import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Title,
  TitleDiv,
} from './Button.Sidebar.Styled';

/**
 * @param {String} title *must
 * @param {String} side left | right
 * @param {Object} button BasicBtn | IconBtn
 * @param {Object} children
 */

const SideBarBtn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  isOpen &&
    document.addEventListener('click', (e) => {
      if (e.target.id == 'back-frame') setIsOpen(!isOpen);
    });

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}>{props.button}</span>
      {isOpen && (
        <Container id="back-frame">
          <Box side={props.side}>
            <TitleDiv>
              <Title>{props.title}</Title>
              <Button side={props.side} onClick={() => setIsOpen(!isOpen)}>
                <i
                  class="fa-solid fa-xmark"
                  style={{
                    fontSize: '3rem',
                    color: 'var(--darkgray-color)',
                  }}
                ></i>
              </Button>
            </TitleDiv>
            <hr />
            <>
              {props.children
                ? React.cloneElement(props.children, {
                    closeSideBar: () => setIsOpen(!isOpen),
                  })
                : 'No Data'}
            </>
          </Box>
        </Container>
      )}
    </>
  );
};

export default SideBarBtn;
