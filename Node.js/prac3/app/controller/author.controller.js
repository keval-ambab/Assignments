// const { authors } = require("../models");
const db = require("../models");
const Author = db.authors;
const Book = db.books;

// CREATING THE Authors
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Empty Data",
    });
    return;
  }

  //create a author
  const author = {
    name: req.body.name,
    age: req.body.age,
  };

  //save author in the database
  Author.create(author)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error Occurred, System Failed",
      });
    });
};

// SHOW/READING THE AUTHOR
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Author.findAll({
    where: condition,
    include: [
      {
        model: Book,
        as: "books",
        attributes: ["bid", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((data) => [res.send(data)])
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occurred, System Failed",
      });
    });
};

// SHOW/READING THE SINGLE AUTHOR

exports.findOne = (req, res) => {
  const aid = req.params.aid;

  Author.findByPk(aid, {
    include: [
      {
        model: Book,
        as: "books",
        attributes: ["bid", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while retrieving the data",
      });
    });
};

//UPDATE THE INFO OF THE AUTHOR

exports.update = (req, res) => {
  const aid = req.params.aid;

  Author.update(req.body, {
    where: { aid: aid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Authors released new Information about him self",
        });
      } else {
        res.send({
          message: `Failed to update the author information with id${aid} , Better luck next time`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while updating the author data ${aid}`,
      });
    });
};

//DELETING THE AUTHOR FROM DATABASE

exports.delete = (req, res) => {
  const aid = req.params.aid;

  Author.destroy({
    where: { aid: aid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `${name} gonna not publish book from nowards :( `,
        });
      } else {
        res.send({
          message: `Not able to delete author with id${aid} , try agian`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while deleting the author data ${aid}`,
      });
    });
};

//DELETING ALL THE AUTHOR FROM DATABASE
exports.deleteAll = (req, res) => {
  Author.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      if (nums == 1) {
        res.send({
          message: `All ${nums} Authors Removed`,
        });
      } else {
        res.send({
          message: `Not able to delete all the authors`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error while deleting the authors.`,
      });
    });
};
