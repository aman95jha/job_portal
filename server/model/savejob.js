const SaveJob = require("../schema/SaveJobSchema");

const saveJob = async (userId, jobId) => {
  const data = new SaveJob({
    jobId: jobId,
    userId: userId,
  });

  return await data.save();
};

const findMySavedJobs = async (userId) => {
  try {
    return await SaveJob.find({ userId: userId });
  } catch (error) {
    console.log(error);
  }
};

const findSavedJobUnique = async (userId, jobId) => {
  try {
    return await SaveJob.find({
      userId: userId,
      jobId: jobId,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveJob,
  findMySavedJobs,
  findSavedJobUnique,
};
