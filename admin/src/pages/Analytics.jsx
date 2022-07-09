import React from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PieCharts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
`;
const BarCharts = styled.div`
  width: 45rem;
`;
const Analytics = () => {
  return (
    <Body>
      <PieCharts>
        <PieChart />
        <PieChart />
      </PieCharts>
      <BarCharts>
        <BarChart />
      </BarCharts>
    </Body>
  );
};

export default Analytics;
