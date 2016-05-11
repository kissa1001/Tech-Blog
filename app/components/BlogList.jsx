var React = require("react");
var BlogInfo = require("./BlogInfo.jsx");

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