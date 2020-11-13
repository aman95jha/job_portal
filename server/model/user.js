const UserSchema = require("../schema/UserSchema");

const findExistingUser = async (username, email, phone) => {
  return await UserSchema.find({
    userType: "user",
    $or: [{ email: email }, { username: username }],
  });
};

const register = async (
  username,
  email,
  phone,
  profileImage,
  password,
  userType
) => {
  const data = new UserSchema({
    username: username,
    email: email,
    phone: phone,
    profile: profileImage,
    password: password,
    userType: userType,
  });

  return await data.save();
};

const findByUsername = async (username) => {
  return await UserSchema.findOne({ username: username });
};

module.exports = { register, findByUsername, findExistingUser };
