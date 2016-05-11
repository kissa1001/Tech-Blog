var _ = require("underscore");
var React = require('react');
var ReactDOM = require("react-dom");
var Navbar = require('./navbar.jsx');

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
                <div className = "row">
            	   <Navbar />
                </div>
                <div className="content">
                    {this.props.children}
                </div>
        	</div>
        )
    }
});