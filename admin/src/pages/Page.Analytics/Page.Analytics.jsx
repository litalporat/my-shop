import React, { useEffect, useState } from 'react';
import BarChart from '../../components/Graphs/BarChart';
import PieChart from '../../components/Graphs/PieChart';
import {
  fetchSalesByCountry,
  fetchStockByType,
} from '../../utils/services/Analytics.Service';
import { BarCharts, Body, PieCharts } from './Page.Analytics.Styled';

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
