const Comment = require("../../../../Models/Comment");
const User = require("../../../../Models/User");

const Post = {
  comments: async (parent, args) => await Comment.find({ post: parent.id }),
  users: async (parent, args) => await User.find({ _id: parent.user }), 
};

module.exports.Post = Post;
  