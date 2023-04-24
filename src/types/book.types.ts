export interface IBookData {
    id: number,
    title: String,
    author: String,
    isbn13: String,
    isbn10: String,
    publicationYear: number,
    publisher: String,
    edition?: String,
    price: number
}
