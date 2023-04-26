import { FC } from "react";
import { IBookData } from "../../types/book.types";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Scroll from "../../components/Scroll";
import { SearchList } from "../../components/SearchList";
import { Navigate } from "react-router-dom";

interface BooksProps {
  books: IBookData[];
}

const BookInformation: FC<BooksProps> = ({ books }) => {
  
  const { isbn } = useParams<{ isbn?: string }>();
  
  // const decodedIsbn = isbn ? decodeURIComponent(isbn) : "";

  // // const filteredBooks = books.filter((book) => {
  // //   const { isbn10, isbn13, title, author } = book;
  // //   const lowerCasedTitle = title.toLowerCase();
  // //   const lowerCasedAuthor = author.toLowerCase();
  // //   return (
  // //     isbn10.toString() === decodedIsbn || isbn13.toString() === decodedIsbn
  // //   );
  // // });

  if (!books || books.length === 0) {
    return <Navigate to="/Error" />;
  }
  return (
    <div>
      <Box mx={10}>
        <Scroll>
          <SearchList books={books} />
        </Scroll>
      </Box>
    </div>
  );
};

export default BookInformation;
