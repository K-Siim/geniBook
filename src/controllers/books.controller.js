export const getAllBooks = (req, res) => {
    res.json({
        message: 'All books'
    });
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
