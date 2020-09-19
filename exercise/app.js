const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData = new Post();

app.get("/api/posts", (req, res) => {
	res.status(200).send(postsData.get());
});

app.get("/api/posts/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId)
    if (foundPost) {
        res.status(200).send(foundPost)
    } else {
        res .status(400).send("Not Found")
    }
});


app.listen(3003, () => console.log("listening on http://localhost:3003"));
