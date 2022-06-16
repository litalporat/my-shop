import { useRef, useState } from "react";
import { IconBtn } from "../Buttons";

const SearchBar = () => {
  const userRef = useRef();
  const [search, setSearch] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <>
      {searchClicked ? (
        <input
          type="text"
          id="search"
          ref={userRef}
          autoComplete="on"
          onChange={(e) => setSearch(e.target.value)}
          value={search} /* אולי להעיף בשביל להשאיר שדה מלא */
          required
        />
      ) : (
        <IconBtn type={"secondary"} onClick={() => setSearchClicked(true)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </IconBtn>
      )}
    </>
  );
};

export default SearchBar;
