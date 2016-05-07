var _ = require("underscore");
var React = require('react');
var ReactDOM = require("react-dom");
var Navbar = require('./navbar.jsx');
var BlogList = require("./BlogList.jsx");
var AddBlog = require("./AddBlog.jsx");
var blogsStore = require("../stores/blogsStore");
var _blogs = [];
var getBlogsCallback = function(blogs){
	_.forEach(blogs,function(blog){
        if(!_contains(_blogs,blog)){
            _blog.push(blog);
        }
    })
	render();
}
blogsStore.onChange(getBlogsCallback);

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
                <div className = "row">
                    <div className = "col-md-6">
                        <AddBlog />
                    </div>
                    <div className = "col-md-6">
            	       <h1>Blogs go here</h1>
                    </div>
                </div>
        	</div>
        )
    }
});