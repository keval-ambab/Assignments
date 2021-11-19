module.exports = (app) => {
  const genre = require("../controller/genre.controller");
  var router = require("express").Router();

  //creating the genre
  router.post("/create", genre.create);
  
  //Reading the all genres data
  router.get("/find", genre.findAll);

  //Reading the single genre data
  router.get("/findone/:id", genre.findOne);

  //Updating the genre data
  router.put("/update/:id", genre.update);

  //Deleting the genre data
  router.delete("/delete/:id", genre.delete);

  //Deleting all the genres data
  router.delete("/deleteall", genre.deleteAll);


  app.use('/api/genres',router)

};
