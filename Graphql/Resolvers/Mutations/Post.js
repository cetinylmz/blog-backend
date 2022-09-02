const Post = require("../../../Models/Post");
const Token = require("../../../Utils/Token");

const Mutation = {
  createPost: async (parent, { data },context) => {
    const user = Token.checkAuth(context);

    const likeCount = 0;
    const commentCount = 0;

    const newPost = new Post({
      ...data,
      likeCount,
      commentCount,
      user: user.id, 
    });

    return await newPost.save();
  },
};

module.exports.Mutation = Mutation;
