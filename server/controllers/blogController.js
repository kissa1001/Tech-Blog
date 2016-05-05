var mongoose = require("mongoose");
var Blog = require("../blog");
var _ = require("underscore");

var router = require("express").Router();
router.route("/blogs/:id?").get(getBlogs).post(addBlog).delete(deleteBlog);

function getBlogs(req, res) {
    Blog.find(function (err, blogs) {
        if (err)
            res.send(err);
        else
            res.json(blogs);
    });
}

function addBlog(req, res) {
    var blog = new Blog(_.extend({}, req.body));
    blog.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(blog);
    });
}

function deleteBlog(req, res) {
    var id = req.params.id;
    Blog.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;