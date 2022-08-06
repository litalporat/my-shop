import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonIcon } from '../../Buttons';
import { BtnsDiv } from './Search.Styled';

const SearchBar = () => {
  const userRef = useRef();
  const [search, setSearch] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {searchClicked ? (
        <BtnsDiv class="form" className="search-bar">
          <input
            type="text"
            id="search"
            ref={userRef}
            autoComplete="on"
            onChange={(e) => setSearch(e.target.value)}
            value={search} /* אולי להעיף בשביל להשאיר שדה מלא */
            required
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                navigate(`/shop?search=${search}`);
              }
            }}
          />
          <ButtonIcon
            type={'secondary'}
            onClick={() => setSearchClicked(false)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </ButtonIcon>
        </BtnsDiv>
      ) : (
        <ButtonIcon type={'secondary'} onClick={() => setSearchClicked(true)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </ButtonIcon>
      )}
    </>
  );
};

export default SearchBar;
