import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import { fetchSalesByCountry, fetchStockByType } from '../utils/fetchAnalytics';

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
  const [stockByType, setStockByType] = useState();
  const [salesByCountry, setSalesByCountry] = useState();

  useEffect(() => {
    fetchStockByType().then((data) => {
      setStockByType(data);
    });
    fetchSalesByCountry().then((data) => {
      setSalesByCountry(data);
    });
  }, []);

  console.log(stockByType);

  return (
    <Body>
      <PieCharts>
        {stockByType && <PieChart stockByType={stockByType} />}
      </PieCharts>
      <BarCharts>
        {salesByCountry && <BarChart salesByCountry={salesByCountry} />}
      </BarCharts>
    </Body>
  );
};

export default Analytics;
