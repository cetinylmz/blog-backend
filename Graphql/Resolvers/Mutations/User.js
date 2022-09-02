const User = require("../../../Models/User");

const Token = require("../../../Utils/Token");

const Mutation = {
  register: async (parent, { data }) => {

    const email = await User.findOne({ email: data.email });
    
    if (email) {
      throw new Error("must be a unique email");
    }

    const newUser = new User({
      ...data,
    });

    const res = await newUser.save();
    const token = Token.generate(res);

    return { ...res._doc, id: res._id, token };
  },

  login: async (parent, { data }) => {
    const email = await User.findOne({ email: data.email });
    if (!email) {
      throw new Error("Not found Email");
    }

    const match = data.password === email.password;
    if (!match) {
      throw new Error("Not found Password");
    }

    const token = Token.generate(email);
    return { ...email._doc, id: email._id, token };
  },
};

module.exports.Mutation = Mutation;
