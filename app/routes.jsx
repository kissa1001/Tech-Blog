var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;

var Layout = require('./components/layout.jsx');
var Main = require('./components/app.jsx');
var AddPost = require('./components/AddBlog.jsx');
var Posts = require('./components/posts.jsx');

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        	<IndexRoute component={Layout}></IndexRoute>
        	<Route path="/posts" component={Posts} />
            <Route path="/add" component={AddPost} />
        </Route>
    </Router>
);