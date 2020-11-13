const Application = require("../schema/ApplicationSchema");
const user = require("./user");

const apply = async (selectedJob, appliedBy) => {
  const data = new Application({
    jobId: selectedJob,
    userId: appliedBy,
  });

  return await data.save();
};

const accept = async (id) => {
  return await Application.updateOne({ id: id }, { $set: { accepted: true } });
};

const reject = async (id) => {
  return await Application.updateOne({ id: id }, { $set: { rejected: true } });
};

const suggest = async (id, suggestion) => {
  return await Application.updateOne(
    { id: id },
    { $set: { suggestion: suggestion } }
  );
};

const findApplicationByUser = (userId) => {
  return Application.find({ userId: userId });
};

const findApplicationUnique = async (userId, jobId) => {
  try {
    return await Application.find({
      userId: userId,
      jobId: jobId,
    });
  } catch (error) {
    console.log(error);
  }
};

const getApplicationsByUserId = async (userId) => {
  console.log(userId);
  try {
    return await Application.find({ userId: userId });
  } catch (error) {
    console.log(error);
  }
};

const getAllApplications = async () => {
  try {
    const data = await Application.find();
    console.log("model", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  apply,
  accept,
  reject,
  findApplicationByUser,
  suggest,
  findApplicationUnique,
  getApplicationsByUserId,
  // For admin
  getAllApplications,
};
