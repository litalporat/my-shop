import styled, { css } from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  border-radius: 5rem;
  padding: 0.5rem 0.5rem;
  font-size: 20px;
  box-shadow: 0px 1px 10px -5px black;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.type == 'secondary'
      ? css`
          color: var(--lightwhite-color);
          border: var(--lightwhite-color) solid 2px;
          :hover {
            color: var(--black-color);
            background: var(--lightwhite-color);
          }
        `
      : css`
          color: var(--lightnude-color);
          background: var(--lightwhite-color);
          border: var(--lightnude-color) solid 2px;
          :hover {
            color: var(--lightwhite-color);
            background: var(--lightnude-color);
          }
        `}
`;

export { Button };
