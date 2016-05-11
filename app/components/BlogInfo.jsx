var React = require("react");
var Actions = require("../actions/BlogActions");

module.exports = React.createClass({
    deleteBlog: function(e){
        e.preventDefault();
        Actions.deleteBlog(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            {this.props.info.name}
                            <span className="pull-right text-uppercase delete-button" onClick={this.deleteBlog}>&times;</span>
                        </h4>
                        <p className="tagline">{this.props.info.tagline}</p>
                        <p className="date">{this.props.info.date}</p>
                    </div>
                    <div className="panel-body">
                        <p>{this.props.info.content}</p>
                    </div>
            </div>
        )
    }
})