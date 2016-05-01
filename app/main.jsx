var React = require("react");
var ReactDOM = require("react-dom");
var BlogList = require("./components/BlogList.jsx");
var blogsStore = require("./stores/blogsStore");
var _blogs = [];
var getBlogsCallback = function(blogs){
	_blogs= blogs;
	render();
}
blogsStore.onChange(getBlogsCallback);


function render(){
    ReactDOM.render(<BlogList blogs={_blogs} />, 
    	document.getElementById("blog-container"));    
}
render();