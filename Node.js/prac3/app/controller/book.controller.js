// const { books } = require("../models");
const db = require("../models");
const Book = db.books;
const Author = db.authors;

// CREATING THE BOOKS
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Empty Data",
    });
    return;
  }

  //create a Book
  const book = {
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
  };

  //save book in the database
  Book.create(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error Occurred, System Failed",
      });
    });
};

// SHOW/READING THE BOOKS
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Book.findAll({
    where: condition,
    include: [
      {
        model: Author,
        as: "authors",
        attributes: ["aid", "name", "age"],
        through: {
          attributes: [],
        }
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

// SHOW/READING THE SINGLE BOOK

exports.findOne = (req, res) => {
  const bid = req.params.bid;

  Book.findByPk(bid,{
    include: [
      {
        model: Author,
        as: "authors",
        attributes: ["aid", "name", "age"],
        through: {
          attributes: [],
        }
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

//ADD A AUTOHR TO A BOOK
exports.addAuthor = (bid, aid) => {
  return Book.findByPk(bid)
    .then((book) => {
      if (!book) {
        console.log("Book not found!");
        return null;
      }
      return Author.findByPk(aid).then((author) => {
        if (!author) {
          console.log("Author not found!");
          return null;
        }

        book.addAuthor(author);
        console.log(`>> added Author id=${author.aid} to Book id=${book.bid}`);
        return book;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Author to Book: ", err);
    });
};

//UPDATE THE INFO OF THE BOOK

exports.update = (req, res) => {
  const bid = req.params.bid;

  Book.update(req.body, {
    where: { bid: bid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Books new edition are ready to released!",
        });
      } else {
        res.send({
          message: `Failed to update the book with id${bid} , Better luck next time`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while updating the book data ${bid}`,
      });
    });
};

//DELETING THE BOOK FROM DATABASE

exports.delete = (req, res) => {
  const bid = req.params.bid;

  Book.destroy({
    where: { bid: bid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Your book called out from market :( ",
        });
      } else {
        res.send({
          message: `Not able to delete book with id${bid} , try agian`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while deleting the book data ${bid}`,
      });
    });
};

//DELETING ALL THE BOOK FROM DATABASE
exports.deleteAll = (req, res) => {
  Book.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      if (nums == 1) {
        res.send({
          message: `All ${nums} Books Removed`,
        });
      } else {
        res.send({
          message: `Not able to delete all the books`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error while deleting the books.`,
      });
    });
};
