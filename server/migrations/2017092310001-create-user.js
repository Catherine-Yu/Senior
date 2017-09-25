module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
	  username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
	  password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
	  gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
	  location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
	  category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
	  price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
	  description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
};
