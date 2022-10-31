const router = require("express").Router();
const db = require("../db/db.json")
const fs = require("fs")
const noteText = require("../db/noteText");







router.get("/notes", function(req, res) {
  noteText
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});


router.post("/notes", (req, res) => {
  noteText
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req, res) {
  noteText
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});


module.exports = router;

