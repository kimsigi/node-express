const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.send("Get All Posts") );
    
router.get("/:id", (req, res) => res.send(`Get Post with id: ${req.params.id}`) );

router.post("/", (req, res) => res.send("Create Post") );

router.put("/:id", (req, res) => res.send(`Update Post with id: ${req.params.id}`) );

router.delete("/:id", (req, res) => res.send(`Delete Post with id: ${req.params.id}`) );

module.exports = router;