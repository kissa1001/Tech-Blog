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
                <div className = "home text-center">
                    <h1 className="header">Blog Website Project</h1>
                    <p className="project-desc">This blog uses  node + express + mongoDB + React.js all of which are exciting,
                     fast and highly scalable. Here i'm using npm to ease the package management and 
                     installation issues.</p>
                </div>
        	</div>
        )
    }
});