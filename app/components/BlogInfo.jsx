var React = require("react");
var actions = require("../actions/BlogActions");

module.exports = React.createClass({
    deleteBlog: function(e){
        e.preventDefault();
        actions.deleteBlog(this.props.info);
    },
    render:function(){
        return(
            <div class="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 class="panel-title">
                            {this.props.info.name}
                            <span className="pull-right text-uppercase delete-button" onClick={this.deleteBlog}>&times;</span>
                        </h4>
                        <p>{this.props.info.tagline}</p>
                        <a data-toggle="collapse" data-parent="#accordion" href=".coll">
                        Read More</a>
                    </div>
                    <div className="coll panel-collapse collapse in">
                        <div className="panel-body">
                            {this.props.info.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})