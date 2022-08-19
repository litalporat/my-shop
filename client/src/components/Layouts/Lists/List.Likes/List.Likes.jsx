import React, { useContext } from 'react';
import CartContext from '../../../../contexts/CartContext';
import HeartContext from '../../../../contexts/HeartContext';
import { ButtonIcon, ButtonPopup } from '../../../Buttons';
import CartProduct from '../../../ProductView/Product.List/Product.List';
import Popup from '../../../ProductView/Product.Popup/Product.Popup';

const LikeList = () => {
  const { addProduct } = useContext(CartContext);
  const { hearts, removeHeart } = useContext(HeartContext);

  return (
    <>
      {hearts.map((like) => (
        <CartProduct
          product={like}
          delete={() => removeHeart(like)}
          button={
            <ButtonPopup
              title={like.displayName}
              size={'L'}
              button={
                <ButtonIcon>
                  <i className="fas fa-shopping-cart"></i>
                </ButtonIcon>
              }
            >
              <Popup product={like} onCart={addProduct} />
            </ButtonPopup>
          }
        />
      ))}
    </>
  );
};

export default LikeList;
