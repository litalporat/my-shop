import { createContext, useEffect, useState } from "react";

const HeartContext = createContext();

export function HeartProvider({ children }) {
  const [hearts, setHearts] = useState(() => {
    const data = localStorage.getItem("hearts");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("hearts", JSON.stringify(hearts));
  }, [hearts]);

  const handleHearts = (product) => {
    if (include(product)) removeHeart(product);
    else addHeart(product);
  };

  const addHeart = (product) => {
    const temp = [...hearts, product];
    setHearts(temp);
  };

  const removeHeart = (product) => {
    const tempHearts = [];
    for (let i = 0; i < hearts.length; i++)
      if (hearts[i]._id != product._id) tempHearts.push(hearts[i]);
    setHearts(tempHearts);
  };

  const include = (product) => {
    for (let i = 0; i < hearts.length; i++)
      if (hearts[i].displayName == product.displayName) return true;
    return false;
  };

  return (
    <HeartContext.Provider
      value={{ hearts, handleHearts, include, removeHeart }}
    >
      {children}
    </HeartContext.Provider>
  );
}

export default HeartContext;
