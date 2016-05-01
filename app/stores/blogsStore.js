var dispatcher = require("../dispatcher");
var blogService = require("../services/blogService");


function BlogStore() {
    var listeners = [];

    function onChange(listener) {
        getBlogs(listener);
        listeners.push(listener);
    }

    function getBlogs(cb){
        blogService.getBlogs().then(function (res){
            cb(res);
        });
    }

    function addBlog(blog) {
        blogService.addBlog(blog).then(function(res){
            console.log(res);
            triggerListeners();
        });
    }

    function deleteBlog(blog) {
        blogService.deleteBlog(blog).then(function(res){
            console.log(res);
            triggerListeners();
        }); 
    }

    function triggerListeners() {
        getBlogs(function(res){
            listeners.forEach(function(listener){
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "blog") {
            switch (split[1]) {
                case "addBlog":
                    addBlog(payload.blog);
                    break;
                case "deleteBlog":
                    deleteBlog(payload.blog);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = BlogStore();