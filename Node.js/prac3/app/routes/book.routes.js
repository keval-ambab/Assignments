module.exports = (app) => {
  const book = require("../controller/book.controller");
  const author = require("../controller/author.controller");
  var router = require("express").Router();

  //creating the book
  router.post("/create", book.create);
  
  //creating the book
  router.post("/addAuthor", book.addAuthor);

  //Reading the all books data
  router.get("/find", book.findAll);

  //Reading the single book data
  router.get("/findone/:bid", book.findOne);

  //Updating the book data
  router.put("/update/:bid", book.update);

  //Deleting the book data
  router.delete("/delete/:bid", book.delete);

  //Deleting all the books data
  router.delete("/deleteall", book.deleteAll);


  app.use('/api/books',router)

};
