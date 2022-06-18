import { useRef, useState } from "react";
import { IconBtn } from "../Buttons";
import styled from "styled-components";
import { Link, Route, useNavigate } from "react-router-dom";

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SearchBar = () => {
  const userRef = useRef();
  const [search, setSearch] = useState("");
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
              if (e.key == "Enter") {
                navigate(`/shop?search=${search}`);
              }
            }}
          />
          <IconBtn type={"secondary"} onClick={() => setSearchClicked(false)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </IconBtn>
        </BtnsDiv>
      ) : (
        <IconBtn type={"secondary"} onClick={() => setSearchClicked(true)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </IconBtn>
      )}
    </>
  );
};

export default SearchBar;
