import styled from 'styled-components';

const Container = styled.div`
  background-color: #d8d2d2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 20px -10px black;
`;
const Body = styled.div`
  margin: 1rem;
  font-weight: bolder;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Price = styled.div`
  color: var(--lightwhite-color);
  padding: 2px 2rem;
  margin-top: -1.8rem;
  font-size: 24px;
  border-radius: 0 0 10px 10px;
  letter-spacing: 2px;
  background-color: var(--darkgray-color);
`;
const Title = styled.div`
  color: var(--darkbrown-color);
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  width: 20rem;
  text-align: center;
`;
const Image = styled.img`
  width: 22rem;
  border-radius: 5px 5px 0 0;
  :hover {
    content: url(${(props) => props.hover});
  }
`;
const Devider = styled.tr`
  background-color: var(--lightnude-color);
  height: 2px;
  border-radius: 50%;
  width: 20rem;
  box-shadow: 0px 8px 10px 1px white;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2.5rem;
  width: 20rem;
  align-items: center;
  justify-content: space-between;
`;

export { Container, Body, Price, Title, Image, Devider, FlexRow };
