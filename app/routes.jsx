var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Main = require('./components/app.jsx');
var AddBlog = require('./components/AddBlog.jsx');
var Blogs = require('./components/BlogList.jsx');

module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={Blogs} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/add" component={AddBlog} />
        </Route>
    </Router>
);