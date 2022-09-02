
const User = require("../../../../Models/User");

const Comment = {

  users: async (parent, args) => await User.find({ _id: parent.user }), 
};

module.exports.Comment = Comment;
