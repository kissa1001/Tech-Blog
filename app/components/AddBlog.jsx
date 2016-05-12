var React = require("react");
var actions = require("../actions/BlogActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:"",
          content:""
      }  
    },
    addBlog:function(e){
        e.preventDefault();
        actions.addBlog(this.state);
        this.setState(this.getInitialState());
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addBlog}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Post Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Blog Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} placeholder="Tagline" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="content">Content:</label>
                    <textarea className="form-control" rows="5" id="content" name="content" value={this.state.content} onChange={this.handleInputChange} placeholder="Blog Content"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Add Post</button>
                </div>
            </form>
        )
    }
})