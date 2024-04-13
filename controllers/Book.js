const Book = require('../model/book')

const getBooks = async (req, res) => {

    try {

        const books = await Book.find({});
        res.send(books);

        console.log(books)

    } catch (error) {

        console.log(error);

    }


};

const createBook = async (req, res) => {
    try {

        const book = new Book({
            title: req.body.title,
            genre: req.body.genre,
            description: req.body.description,
            completed: req.body.completed
        });

        await book.save();

        res.status(201).json(book);

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }

}

const updateBook = async (req, res) => {
    try {
    
        // const book = new Book({
        //     title: req.body.title,
        //     genre: req.body.genre,
        //     description: req.body.description,
        //     completed: req.body.completed
        // });

        const updatedbook = await Book.findOneAndUpdate( 
            {_id: req.params.bookID },
            req.body,
            {new:true}); 

      console.log(updatedbook)

      res.json({updatedbook})

        } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }

}


const deleteBook = async (req, res) => {
    try {
    
        // const book = new Book({
        //     title: req.body.title,
        //     genre: req.body.genre,
        //     description: req.body.description,
        //     completed: req.body.completed
        // });

        const deleteBook = await Book.deleteOne(
            {_id: req.params.bookID }); 

      console.log(deleteBook)

      res.json({deleteBook})

        } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }

}


module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
};
