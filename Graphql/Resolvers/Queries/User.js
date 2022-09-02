const User = require("../../../Models/User");

const Query = {
  getUsers: async (parent, args) => {
    return await User.find();
  },
  getUser: async (parent, args) => {
    return await User.findById(args.id);
  },
};

module.exports.Query = Query;
