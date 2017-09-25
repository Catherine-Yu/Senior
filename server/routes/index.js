//const todosController = require('../controllers').todos;
//const todoItemsController = require('../controllers').todoItems;
const usersController = require('../controllers').users;
const noteItemsController = require('../controllers').noteItems;

module.exports = (app) => {
  app.get('/', (req, res) => res.sendFile(`../view/index.html`));
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the NOTE SYSTEM API!',
  }));
  
  app.post('/api/users', usersController.create);
  app.post('/api/users/check', usersController.check);
  app.get('/api/users/:userid', usersController.retrieve);
  app.post('/api/users/:userid', usersController.update);
	
  app.post('/api/notes/:userid', noteItemsController.create);
  app.post('/api/notes/:userid/items/:noteid', noteItemsController.update);
};
