import type { Book } from "../types/book.js";

let books: Book[] = [
    {
        "id": 1,
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "year": 2008
    },
    {
        "id": 2,
        "title": "Design Patterns",
        "author": "Erich Gamma",
        "year": 1994
    }
];

// repository es solamente para trabajar con los datos (queries, etc)

export function findAll(): Book[] {
    return books;
}

// GET book by id
export const findById = (id: number) =>
    books.find(book => book.id === id);

// POST insert new book query
export const create = (book: Book) => {
    books.push(book);
    return book;
};

// PATCH update book by id
export const update = (id: number, data: Partial<Book>) => {
    const book = books.find(book => book.id === id);

    if (!book) {
        return null;
    }

    Object.assign(book, data);

    return book;
};

// DELETE remove book by id
export const remove = (id: number) => {
    const exists = books.some(book => book.id === id);

    if (!exists) return false;

    books = books.filter(book => book.id !== id);

    return true;
};

export const findByAuthor = (author: string) => {
    return books.filter(book =>
        book.author.toLowerCase().includes(author.toLowerCase())
    );
};
