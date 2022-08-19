import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const PieCharts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28rem;
`;
const BarCharts = styled.div`
  width: 55rem;
`;
const Container = styled.div`
  display: flex;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export { Body, PieCharts, BarCharts, Container };
