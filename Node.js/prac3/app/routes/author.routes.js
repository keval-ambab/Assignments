module.exports = (app) => {
  const author = require("../controller/author.controller");
  var router = require("express").Router();

  //creating the author
  router.post("/create", author.create);
  //Reading the all authors data
  router.get("/find", author.findAll);

  //Reading the single author data
  router.get("/findone/:id", author.findOne);

  //Updating the author data
  router.put("/update/:id", author.update);

  //Deleting the author data
  router.delete("/delete/:id", author.delete);

  //Deleting all the authors data
  router.delete("/deleteall", author.deleteAll);


  app.use('/api/authors',router)

};
