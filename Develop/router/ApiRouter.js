const router = require("express").Router();
const db = require("../db/db.json")
const fs = require("fs")



router.get("/notes", (req, res) => {
res.json(db)
});

router.post("/notes", (req, res) => {
  // look into req.body
  // save new information to db with fs
  // return the db


const newNote = req.body
const myJSON = JSON.stringify(newNote);
fs.writeFile("../db/db.json", myJSON, (err) => err
? console.log(err) :console.log("succses")
)

})


module.exports = router;
