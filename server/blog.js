var mongoose = require("mongoose");
var blogSchema = mongoose.Schema({
    name: String,
    tagline: String,
    content: String,
    date: { type : String, default: new Date().toUTCString() }
});

module.exports = mongoose.model("blog", blogSchema);