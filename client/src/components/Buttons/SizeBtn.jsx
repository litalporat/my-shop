import React from "react";
import styled from "styled-components";
const Bubble = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 15px 35px;
  border-radius: 25px;
  width: 150px;
  height: 30px;
  animation: pop 0.3s linear 1;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border: 20px solid transparent;
  border-top: 20px solid white;
  align-items: center;
`;

const Size = styled.button`
  border: 1px solid black;
  padding: 3px 7px;
  gap: 10px;
  border-radius: 50px;
`;

export default function SizeBtn(props) {
  const handleSize = (s) => {
    props.closeSize();
    props.product.size = s;
    props.onCart();
  };

  return (
    <div>
      {console.log(props.product)}
      <Bubble>
        {Object.keys(props.product.stock).map((size) => (
          <Size onClick={() => handleSize(size)}>{size.toUpperCase()}</Size>
        ))}
      </Bubble>
      <Triangle></Triangle>
    </div>
  );
}
