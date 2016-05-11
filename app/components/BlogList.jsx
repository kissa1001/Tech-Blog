var React = require("react");
var BlogInfo = require("./BlogInfo.jsx");
var blogsStore = require("../stores/blogsStore");
var _blogs = [];
var getBlogsCallback = function(blogs){
  _blogs= blogs;
  _.forEach(blogs,function(blog){
    if(!_contains(_blogs,blog)){
      _blog.push(blog);
    }
  })
  render();
}
blogsStore.onChange(getBlogsCallback);


module.exports = React.createClass({
  componentDidMount: function() {
    console.log(this.props.blogs);
  },
  render:function(){
    return(
      <div className="blogs">
      { 
        this.props.blogs.map(function(s,index){
          return(
            <BlogInfo info={s} key={"blog" + index} />
            )         
        })
      }
      </div>
      )
  } 
});