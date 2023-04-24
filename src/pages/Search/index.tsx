import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center, IconButton, Input } from "@chakra-ui/react";
import SearchBar from "./Search";
import staticData from "../../static/staticData";

const Search = () => {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <SearchBar books={staticData}/>
    </div>
  );
};

export default Search;
