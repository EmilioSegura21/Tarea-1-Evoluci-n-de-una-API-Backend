import {
    findAll,
    findById,
    findByAuthor,
    create,
    update,
    remove
} from "../repositories/book.repository.js";

import type { Book } from "../types/book.js";

export function getBooks(author?: string) {
    if (author) {
        return findByAuthor(author);
    }

    return findAll();
}

export const getBook = (id: number) => {
    return findById(id);
};

export const createBook = (book: Book) => {
    const newBook = {
        ...book,
        id: Date.now(),
    };

    return create(newBook);
};

export const updateBook = (id: number, book: Partial<Book>) => {
    return update(id, book);
};

export const deleteBook = (id: number) => {
    return remove(id);
};