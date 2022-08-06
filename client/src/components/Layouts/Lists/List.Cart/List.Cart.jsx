import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../../contexts/CartContext';
import { ButtonArrow, ButtonQuantity } from '../../../Buttons';
import { ProductList } from '../../../ProductView';
import { Container } from './List.Cart.Styled';

const CartList = (props) => {
  const { products, removeProduct } = useContext(CartContext);

  return (
    <Container>
      {products.map(
        (product) => (
          console.log(product),
          (
            <ProductList product={product} delete={removeProduct}>
              <ButtonQuantity
                disable={product.stock[product.size]}
                product={product}
              />
            </ProductList>
          )
        )
      )}
      {products.length > 0 && (
        <Link onClick={props.closeSideBar} to={'/cart'}>
          <ButtonArrow content={'to checkout'} />
        </Link>
      )}
    </Container>
  );
};

export default CartList;
