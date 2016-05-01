var React = require("react");
var BlogInfo = require("./BlogInfo.jsx");
var AddBlog = require("./AddBlog.jsx");

module.exports = React.createClass({
  render:function(){
    return(
      <div className="row">
        <div className="col-md-6">
          <AddBlog />
        </div>
        <div className="col-md-6">
          {
            this.props.blogs.map(function(s,index){
              return(
                <BlogInfo info={s} key={"blog" + index} />
              )         
            })
          }
        </div>
      </div>
    )
  } 
});