import type { Request, Response, NextFunction } from "express";

export const validateBook = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, author, year } = req.body;

    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            message: "Title is required and cannot contain only spaces"
        });
    }

    if (typeof author !== "string" || author.trim() === "") {
        return res.status(400).json({
            message: "Author is required"
        });
    }

    if (typeof year !== "number" || !Number.isFinite(year) || year < 0) {
        return res.status(400).json({
            message: "Year must be a valid number"
        });
    }

    next();
};
