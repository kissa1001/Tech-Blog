var React = require("react");
var Link = require('react-router').Link;

module.exports = React.createClass({
  render:function(){
    return(
      	<div className="navbar navbar-default">
        	<div className="container-fluid">
            	<div className="navbar-header">
                	<a className="navbar-brand" href="#">DevBLogs</a>
            	</div>
            	<ul className="nav navbar-nav">
            		<li><Link to="/blogs">BLogs</Link></li>
            		<li><Link to="/add">Add Blog</Link></li>
            	</ul>
        	</div>
    	</div>
    )
  } 
});