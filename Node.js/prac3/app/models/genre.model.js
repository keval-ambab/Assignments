module.exports = (sequelize, Sequelize) => {
    const Genres = sequelize.define("Genre",{
        gid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        genre: {
            type: Sequelize.STRING
        },
        // timestamps: false
    });

    return Genres;
}

