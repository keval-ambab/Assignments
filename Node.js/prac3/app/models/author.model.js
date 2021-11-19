module.exports = (sequelize, Sequelize) => {
    const Authors = sequelize.define("Author",{
        aid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        // timestamps: false
    });

    return Authors;
}