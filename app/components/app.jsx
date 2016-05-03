var React = require('react');
var ReactDOM = require("react-dom");
var nav = require('./navbar.jsx');
var BlogList = require("./BlogList.jsx");
var blogsStore = require("../stores/blogsStore");
var _blogs = [];
var getBlogsCallback = function(blogs){
	_blogs= blogs;
	render();
}
blogsStore.onChange(getBlogsCallback);

module.exports = React.createClass({
    render: function() {
        return <div>
            <nav />
            <BlogList blogs={_blogs} />
        </div>
    }
});