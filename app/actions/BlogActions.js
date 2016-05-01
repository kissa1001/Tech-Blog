var dispatcher = require("../dispatcher");

module.exports = {
    addBlog:function(blog){
        dispatcher.dispatch({
           blog:blog,
           type:"blog:addBlog" 
        });
    },
    deleteBlog:function(blog){
        dispatcher.dispatch({
           blog:blog,
           type:"blog:deleteBlog" 
        });
    }
}