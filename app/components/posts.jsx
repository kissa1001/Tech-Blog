var React = require("react");
var ReactDOM = require("react-dom");
var BlogList = require("./BlogList.jsx");
var blogsStore = require("../stores/blogsStore");

var _blogs = [];
var getBlogsCallback = function(blogs){
  _blogs= blogs;
  render();
};

blogsStore.onChange(getBlogsCallback);

function render(){
  	ReactDOM.render(<BlogList blogs={_blogs} />,document.getElementById("posts"));
}

module.exports = React.createClass({
	componentDidMount: function() {
    	console.log(_blogs);
  	},
    render:function(){
        return(
            <BlogList blogs={_blogs} />
        )
    }
})


