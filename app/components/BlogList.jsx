var React = require("react");
var BlogInfo = require("./BlogInfo.jsx");

module.exports = React.createClass({
  componentDidMount: function() {
      console.log(this.props);
    },
  render:function(){
    return(
      <div className="blogs">
          <h1>Blogs here!!!</h1>
      </div>
    )
  } 
});