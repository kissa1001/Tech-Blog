var React = require("react");
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

module.exports = React.createClass({
  render:function(){
    return(
      	<div className="navbar navbar-default">
        	<div className="container-fluid">
            	<div className="navbar-header navbar-brand">
                    <IndexLink to="/">Devblogs</IndexLink>
            	</div>
            	<ul className="nav navbar-nav">
            		<li><Link to="/blogs">Blogs</Link></li>
            		<li><Link to="/add">Add Blog</Link></li>
            	</ul>
        	</div>
    	</div>
    )
  } 
});