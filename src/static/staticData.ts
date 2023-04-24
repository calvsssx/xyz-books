import { IBookData } from "../types/book.types";

const staticData: Array<IBookData> = [{
    id: 1,
    title: 'American Elf',
    author: `Joel Hartse, Hannah P. Templer,
    Marguerite Z. Duras`,
    isbn13: '978-1-891830-85-3',
    isbn10: '1-891-83085-6',
    publicationYear: 2004,
    publisher: 'Paste Magazine',
    edition: 'Book 2',
    price: 1000
},
{
    id: 2,
    title: 'Cosmoknights',
    author: `Kingsley Amis`,
    isbn13: '978-1-60309-454-2',
    isbn10: '1-603-09454-7',
    publicationYear: 2019,
    publisher: 'Publishers Weekly Book',
    edition: 'Book 1',
    price: 2000
}

]

export default staticData;