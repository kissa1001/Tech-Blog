var mongoose = require("mongoose");
var blogSchema = mongoose.Schema({
    name: String,
    tagline: String,
    content: String
});

module.exports = mongoose.model("blog", blogSchema);