import { FC, Key } from 'react';
import Card from './Card';
import { IBookData } from '../types/book.types';
import { Stack } from '@chakra-ui/react';

interface BooksProps{
    books: IBookData[];
 }
 

// function SearchList({ filteredBooks }: {filteredBooks: IBookData}) {
//   const filtered = Object.keys(filteredBooks).map(key => (
//     <Card key={key[0]} book={key}></Card>
//   ))

//   return (
//     <div>
//       {filtered}
//     </div>
//   );
// }

// export default SearchList;

// pass it under the FC generic
export const SearchList: FC<BooksProps> = ({books}) => {
    return (
        <Stack>
        {books.map((book) => (
        //   <Post key={post._id} post={post} />
            <Card key={book.id} book={book}></Card>
        ))}
        </Stack>
    );
  };
  