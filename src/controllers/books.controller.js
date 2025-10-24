import prisma from "../config/prisma.js";


export const getAllBooks = async (req, res) => {

    try {
        const books = await prisma.book.findMany();

    res.json({
        message: 'All books',
        data: books
    });
    } catch (exception) {
        console.log(exception);
        res.status(500).json({
            message: 'Internal server error',
            error: exception.message
        })

    }

    
};

export const getBookById = (req, res) => {
    res.json({
        id: req.params.id
    });
};

export const createBook = (req, res) => {
    res.json({
        message: 'Book created'
    });
};

export const updateBook = (req, res) => {
    res.json({
        message: 'Book updated'
    });
};

export const deleteBook = (req, res) => {
    res.json({
        message: 'Book deleted'
    });
};
