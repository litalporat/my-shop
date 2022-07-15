import styled from "styled-components";

const Container = styled.body`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  gap: 5rem;
`;

export { Container, LoginForm };
