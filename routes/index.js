var express = require('express');
var router = express.Router();

const Todo = require("../models/Todo")

router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo : allTodo});
})

.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Deleted this todo successfully!")
        res.redirect("/")
    })
    .catch(err => console.log(err))

})

module.exports = router;