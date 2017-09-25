const NoteItem = require('../models').NoteItem;

module.exports = {
  create(req, res) {
	var currdatetime = new Date();
    return NoteItem
      .create({
		    title: req.body.title,
        content: req.body.content,
		    builddate:currdatetime,
		    noteId: req.params.userid,
      })
      .then(noteItem => res.status(201).send(noteItem))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return NoteItem
      .find({
        where: {
          id: req.params.noteid,
          noteId: req.params.userid,
        },
      })
      .then(noteItem => {
        if (!noteItem) {
          return res.status(404).send({
            message: 'NoteItem Not Found',
          });
        }

        return noteItem
          .update({
            title: req.body.title || noteItem.title,
            content: req.body.content || noteItem.content,
          })
          .then(updatedNoteItem => res.status(200).send(updatedNoteItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }

        return todoItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
