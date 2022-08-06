import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Devieder, Item, Wrapper } from './Button.Menu.Styled';

/**
 * @param {String} title *must
 * @param {String[]} sideTitles ["example","example"]
 */

const DropDown = (props) => {
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  document.addEventListener('click', (e) => {
    setdropdown(false);
  });

  return (
    <Wrapper>
      <Button
        onClick={() => navigate('/shop')}
        onMouseOver={() => setdropdown(true)}
      >
        {props.title}
      </Button>
      {dropdown && <DropDownList items={props.items} />}
    </Wrapper>
  );
};

const DropDownList = (props) => {
  return (
    <Box className="DDList">
      <Devieder />
      <Item>
        <Link to="/shop/"> All Products </Link>
      </Item>
      <Devieder />
      {props.items.map((category) => (
        <>
          <Item>
            <Link key={category._id} to={`/shop?category=${category.name}`}>
              {category.displayName}
            </Link>
          </Item>
          <Devieder />
        </>
      ))}
    </Box>
  );
};

export default DropDown;
