import React, { FC, useState } from "react";
import { SearchList } from "../../components/SearchList";
import Scroll from "../../components/Scroll";
import { IBookData } from "../../types/book.types";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

interface BooksProps {
  books: IBookData[];
}

const SearchBar: FC<BooksProps> = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    //debugger
    event.preventDefault();
    const target = event.target as typeof event.target & {
      isbnValue: { value: string };
    };
    console.log(target)

    const validateIsbn = /^((\d{10})|(\d{13}))$/;
    const inputIsbn = target.isbnValue.value.replace(/-/g, "");
    if (validateIsbn.test(inputIsbn)) {
      const isbn10IsValid = validateIsbn10(inputIsbn);
      if (isbn10IsValid) {
        // redirect to /BooksInformation/:isbn
        navigate(`/BooksInformation/${target.isbnValue.value}`);
      } else {
        alert("Invalid ISBN number");
      }
    } else {
      alert("Invalid ISBN number");
    }

    function validateIsbn10(isbn: string): boolean {
      isbn = isbn.replace(/-/g, ''); // remove dashes, if any
      if (isbn.length !== 10 || !/^\d{9}[\d|X]$/.test(isbn)) {
        return false; // invalid format
      }
    
      // calculate checksum
      const sum = isbn.split('')
        .map((digit, index) => {
          if (digit === 'X') {
            digit = '10';
          }
          const weight = 10 - index;
          return parseInt(digit) * weight;
        })
        .reduce((prev, curr) => prev + curr);
    
      return sum % 11 === 0; // valid if checksum is divisible by 11
    }
  };

  return (
      <form onSubmit={handleSubmit}>
      <Flex align="center" m={100}>
      <Input
        type="text"
        name="isbnValue"
        placeholder="Input 10 or 13 ISBN Number"
        size="md"
      />
      <span>
          <IconButton
            type="submit"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </span>
      </Flex>
      {/* <Box alignItems="center" marginLeft="100">
      {error && <Box color="red">{error}</Box>}
      </Box> */}
    </form>
  );
};

export default SearchBar;
