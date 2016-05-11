var _ = require("underscore");
var React = require('react');
var ReactDOM = require("react-dom");
var Navbar = require('./navbar.jsx');
var BlogList = require("./BlogList.jsx");
var blogsStore = require("../stores/blogsStore");

var _blogs = [];
var getBlogsCallback = function(blogs){
  _blogs= blogs;
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
            	   <Navbar />
                </div>
                <div className="content">
                    {
                        this.props.children && React.cloneElement(this.props.children, { blogs: _blogs })
                    }
                </div>
        	</div>
        )
    }
});