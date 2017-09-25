module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('NoteItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		content: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		builddate: {
		  type: Sequelize.DATE,
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
      noteId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'noteId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('NoteItems'),
};
