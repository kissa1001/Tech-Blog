var _ = require("underscore");
var React = require('react');
var ReactDOM = require("react-dom");

module.exports = React.createClass({
    render: function() {
        return (
        	<div>
                <div className = "home text-center">
                    <h1 className="header">Blog Website Project</h1>
                    <p className="project-desc">This blog uses  node + express + mongoDB + React.js all of which are exciting,
                     fast and highly scalable. Here i'm using npm to ease the package management and 
                     installation issues.</p>
                    <p className="project-desc">To have a look at code for this project, <a href="https://github.com/kissa1001/Tech-Blog">Click here</a>. 
                    If you would like to see other projects, take a look at my <a href="https://github.com/kissa1001?tab=repositories">Github</a> page</p>
                    <p className="footer">Made with <i className="fa fa-heart" aria-hidden="true"></i> by Kissa!</p>
                </div>
        	</div>
        )
    }
});