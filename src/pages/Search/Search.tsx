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
      const checksum = (digits: number[], base: number) => {
        let factor = 1;
        let sum = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
          const digit = digits[i];
          sum += digit * factor;
          factor = base - factor;
        }
        return sum % base;
      };
      const isbn10Checksum = (digits: number[]) => {
        const sum = digits.reduce((acc, val, idx) => {
          return acc + val * (10 - idx);
        }, 0);
        return (11 - (sum % 11)) % 11;
      };
      const isbn13Checksum = (digits: number[]) => {
        const sum = digits.reduce((acc, val, idx) => {
          const weight = idx % 2 === 0 ? 1 : 3;
          return acc + val * weight;
        }, 0);
        return (10 - (sum % 10)) % 10;
      };
      const isbn = inputIsbn.split("");
      const isbn10 = isbn.slice(0, 9).map((digit) => parseInt(digit, 10));
      const isbn10CheckDigit =
        isbn[9].toLowerCase() === "x" ? 10 : parseInt(isbn[9], 10);
      const isbn13 = isbn.map((digit) => parseInt(digit, 10));
      const isbn10IsValid = isbn10Checksum(isbn10) === isbn10CheckDigit;
      const isbn13IsValid = isbn13Checksum(isbn13.slice(0, 12)) === isbn13[12];
      if (isbn10IsValid || isbn13IsValid) {
        // redirect to /BooksInformation/:isbn
        navigate(`/BooksInformation/${target.isbnValue.value}`);
      } else {
        alert("Invalid ISBN number");
      }
    } else {
      alert("Invalid ISBN number");
    }

    //WAY 1
    // const inputValue = target.isbnValue.value;
    // const isbn10Regex = /^(?:\d{9}X|\d{10})$/;
    // const isbn13Regex = /^(?:\d{13})$/;

    // if (isbn10Regex.test(inputValue)) {
    //   navigate(`/BooksInformation/${inputValue}`);
    // } else if (isbn13Regex.test(inputValue)) {
    //   navigate(`/BooksInformation/${inputValue}`);
    // } else {
    //   // CHANGE TO A UI
    //   alert("Invalid ISBN format. Please enter a valid ISBN 10 or ISBN 13.");
    // }

    //WAY 2 (SHORTER VERSION WITH UI VALIDATION)

    // const regex = /^(?:\d{9}[\dXx]|\d{13})$/;
    // const isbn = target.isbnValue.value.trim();
    // if (!regex.test(isbn)) {
    //   setError("Invalid ISBN format. Please enter a 10 or 13 digit number.");
    //   return;
    // }

    // navigate("/BooksInformation/" + isbn);
  };
  // <form onSubmit={handleSubmit}>
  //     <Flex align="center" m={100}>
  //     <Input
  //       type="text"
  //       name="isbnValue"
  //       placeholder="Input 10 or 13 ISBN Number"
  //       size="md"
  //     />
  //     <span>
  //         <IconButton
  //           type="submit"
  //           aria-label="Search database"
  //           icon={<SearchIcon />}
  //         />
  //       </span>
  //     </Flex>
  //     <Box alignItems="center" marginLeft="100">
  //     {error && <Box color="red">{error}</Box>}
  //     </Box>
  //   </form>

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
