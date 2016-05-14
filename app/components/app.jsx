var _ = require("underscore");
var React = require('react');
var ReactDOM = require("react-dom");
var Navbar = require('./navbar.jsx');
var BlogList = require("./BlogList.jsx");

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
                <div className = "row">
            	   <Navbar />
                </div>
                <div className="content" id="content">
                    {
                      this.props.children 
                    }
                </div>
        	</div>
        )
    }
});