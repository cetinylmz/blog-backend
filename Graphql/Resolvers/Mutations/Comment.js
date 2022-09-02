const Comment = require("../../../Models/Comment");
const Token = require("../../../Utils/Token");

const Mutation = {
  createComment: async (parent, { data },context) => {

    const user = Token.checkAuth(context);

    const newComment = new Comment({
      ...data,
      user:user.id 
    });

    const res = await newComment.save();

    return res;
  },
};

module.exports.Mutation = Mutation;
