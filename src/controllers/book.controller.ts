import type { Request, Response } from "express";

import {
    getBooks,
    createBook,
    deleteBook,
    getBook,
    updateBook
} from "../services/book.services.js";

export function getAllBooks(req: Request, res: Response) {
    const { author } = req.query;

    if (author) {
        return res.json(getBooks(String(author)));
    }

    res.json(getBooks());
}

export const getOne = (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const book = getBook(id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
};

export const create = (req: Request, res: Response) => {
    const book = req.body;

    const newBook = createBook(book);

    res.status(201).json(newBook);
};

export const update = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const book = req.body;

    const updatedBook = updateBook(id, book);

    if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
};

export const remove = (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const deleted = deleteBook(id);

    if (!deleted) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(204).send();
};