import { useState } from 'react';
import { BackFrame, Box, Button, Title, TitleDiv } from './Button.Popup.Styled';

/**
 * Props:
 * @param {String} title
 * @param {String} size S | L | M
 * @param {Object} button Basic | Icon
 * @param {[Object]} children [...]
 */
const PopupBtn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  isOpen &&
    document.addEventListener('click', (e) => {
      if (e.target.id == 'back-frame') setIsOpen(!isOpen);
    });

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}>{props.button}</span>
      {isOpen && (
        <BackFrame id="back-frame">
          <Box size={props.size}>
            <TitleDiv>
              <Title>{props.title}</Title>
              <Button onClick={() => setIsOpen(!isOpen)}>
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
            {props.children ? props.children : 'No Data'}
          </Box>
        </BackFrame>
      )}
    </>
  );
};

export default PopupBtn;
