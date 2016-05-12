var React = require("react");
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

module.exports = React.createClass({
  render:function(){
    return(
      	<div className="navbar">
        	<div className="container">
            	<div className="navbar-header">
                    <p className="navbar-brand">DevBlogs</p>
            	</div>
            	<ul className="nav navbar-nav">
                    <li><IndexLink to="/">Home</IndexLink></li>
            	</ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/add">Add Post</Link></li>
                </ul>
        	</div>
    	</div>
    )
  } 
});