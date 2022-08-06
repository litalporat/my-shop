import styled, { css } from 'styled-components';

const Body = styled.div`
  display: flex;
  gap: 1rem;
`;
const Box = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  color: var(--black-color);
  letter-spacing: 2px;
  font-weight: 900;
  border: var(--lightnude-color) solid 2px;
  border-radius: 5px;
  background: var(--lightwhite-color);
  ${(props) =>
    (props.amount <= 0 || props.amount == null) &&
    css`
      color: var(--white-color);
      border-color: var(--lightnude-color);
    `}
`;

const Text = styled.p`
  text-transform: uppercase;
`;

export { Body, Box, Text };
