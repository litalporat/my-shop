import { useRef, useState } from "react";
import { IconBtn } from "../Buttons";
import styled from "styled-components";

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

  return (
    <>
      {searchClicked ? (
        <BtnsDiv>
          <input
            type="text"
            id="search"
            ref={userRef}
            autoComplete="on"
            onChange={(e) => setSearch(e.target.value)}
            value={search} /* אולי להעיף בשביל להשאיר שדה מלא */
            required
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
