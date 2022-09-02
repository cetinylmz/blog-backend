const Comment = require("../../../Models/Comment");

const Query = {
  getComments: async (parent, args) => {
    return await Comment.find();
  },
  getComment: async (parent, args) => {
    return await Comment.findById(args.id);
  },
};

module.exports.Query = Query;
