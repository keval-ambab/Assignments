module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define("Book", {
    bid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
    },
    // timestamps: false
  });

  return Books;
};
