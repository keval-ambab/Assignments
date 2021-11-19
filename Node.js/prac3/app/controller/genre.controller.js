const { genres } = require("../models");
const db = require("../models");
const Genre = db.genres;

// CREATING THE GENRES
exports.create = (req, res) => {
  if (!req.body.genre) {
    res.status(400).send({
      message: "Empty Data",
    });
    return;
  }

  //create a Genre
  const genre = {
    genre: req.body.genre,
  };

  //save genre in the database
  Genre.create(genre)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error Occurred, System Failed",
      });
    });
};

// SHOW/READING THE GENRES
exports.findAll = (req, res) => {
  const genre = req.query.genre;
  var condition = genre ? { genre: { [Op.like]: `%${genre}%` } } : null;

  Genre
    .findAll({ where: condition })
    .then((data) => [res.send(data)])
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occurred, System Failed",
      });
    });
};

// SHOW/READING THE SINGLE GENRE

exports.findOne = (req, res) => {
  const id = req.params.id;

  Genre.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while retrieving the data",
      });
    });
};

//UPDATE THE INFO OF THE GENRE

exports.update = (req, res) => {
  const id = req.params.id;

  Genre.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Genres new edition are ready to released!",
        });
      } else {
        res.send({
          message: `Failed to update the genre with id${id} , Better luck next time`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while updating the genre data ${id}`,
      });
    });
};

//DELETING THE GENRE FROM DATABASE

exports.delete = (req, res) => {
  const id = req.params.id;

  Genre.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "This genre not interested anymore :( ",
        });
      } else {
        res.send({
          message: `Not able to delete genre with id${id} , try agian`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while deleting the genre data ${id}`,
      });
    });
};

//DELETING ALL THE GENRE FROM DATABASE
exports.deleteAll = (req, res) => {
  Genre.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      if (nums == 1) {
        res.send({
          message: `All ${nums} Genres Removed`,
        });
      } else {
        res.send({
          message: `Not able to delete all the genres`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error while deleting the genres.`
      });
    });
};

