import { createContext, useEffect, useState } from "react";

const OrderHistoryContext = createContext();

export function OrderHistoryProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const data = localStorage.getItem("orderHistory");
    return data ? JSON.parse(data) : [];
  });



  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    const temp = [...orders, order];
    setOrders(temp);
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
}

export default OrderHistoryContext;

{
  
}
