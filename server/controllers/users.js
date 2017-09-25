const User = require('../models').User;
const NoteItem = require('../models').NoteItem;

module.exports = {
  create(req, res) {
    return User
      .create({
		username:req.body.username,
		email: req.body.email,
		password: req.body.password,
		gender: req.body.gender,
		location: req.body.location,
		category: req.body.category,
		price: req.body.price,
		description: req.body.description,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll({
        include: [{
          model: NoteItem ,
          as: 'noteItems',
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: NoteItem, as: 'noteItems' }, 'createdAt', 'ASC'],
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return User
      .findById(req.params.userid, {
        include: [{
          model: NoteItem ,
          as: 'noteItems',
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
		//console.log("lalaal");
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },
  check(req, res) {
    return User
      .findOne({ where: {username: req.body.username,password: req.body.password} })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findById(req.params.userid, {
        include: [{
          model: NoteItem,
          as: 'noteItems',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return user
          .update({
			email: req.body.email || user.email,
			password: req.body.password || user.password,
			gender: req.body.gender || user.gender,
			location: req.body.location || user.location,
			category: req.body.category || user.category,
			price: req.body.price || user.price,
			description: req.body.description || user.description,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

};
