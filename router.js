const router = require("express").Router();

const {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
  } = require("./controllers/Book");

  

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/books", getBooks);

router.post("/books", createBook);


router.put("/books/:bookID", updateBook);

router.delete("/books/:bookID", deleteBook);


// router.post('/users', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;
//     const newUser = new User({ name, email, age });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });



module.exports = router;
