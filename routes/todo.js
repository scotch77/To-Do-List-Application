var express = require('express');
var router = express.Router();

const Todo = require("../models/Todo")

router.post("/add/tdo", (req,res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo: todo});

    newTodo.save()
    .then(() => {
        console.log("Successfully saved!")
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})

module.exports = router;