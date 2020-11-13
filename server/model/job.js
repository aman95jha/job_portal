const Job = require("../schema/JobsSchema");

const add = async (
  postedBy,
  jobId,
  title,
  role,
  responsibility,
  companyName,
  experience,
  noOfPositions,
  location,
  skills,
  degree,
  companyInfo,
  employmentType,
  searchKeywords,
  jobDesc,
  salaryMin,
  salaryMax
) => {
  const data = new Job({
    postedBy: postedBy,
    jobId: jobId,
    title: title,
    role: role,
    responsibility: responsibility,
    companyName: companyName,
    experience: experience,
    salaryRange: {
      min: salaryMin,
      max: salaryMax,
    },
    noOfPositions: noOfPositions,
    location: location,
    skills: skills,
    degree: degree,
    companyInfo: companyInfo,
    employmentType: employmentType,
    searchKeywords: searchKeywords,
    jobDesc: jobDesc,
  });

  return await data.save();
};

const update = async (
  id,
  jobId,
  title,
  role,
  responsibility,
  companyName,
  experience,
  noOfPositions,
  location,
  skills,
  degree,
  companyInfo,
  employmentType,
  searchKeywords,
  jobDesc,
  salaryMin,
  salaryMax
) => {
  const data = {
    jobId: jobId,
    title: title,
    role: role,
    responsibility: responsibility,
    companyName: companyName,
    experience: experience,
    salaryRange: {
      min: salaryMin,
      max: salaryMax,
    },
    noOfPositions: noOfPositions,
    location: location,
    skills: skills,
    degree: degree,
    companyInfo: companyInfo,
    employmentType: employmentType,
    searchKeywords: searchKeywords,
    jobDesc: jobDesc,
  };

  return await Job.updateOne({ _id: id }, { $set: data });
};

const drop = async (id) => {
  return await Job.updateOne({ id: id }, { $set: { drop: true } });
};

const findFiveJobs = async (postCompanyRole, place) => {
  return await Job.find().limit(5);
};

const viewAll = async () => {
  return await Job.find();
};

const viewOne = async (id) => {
  return await Job.findById(id);
};

const DeleteOne = async (id) => {
  return await Job.deleteOne({ _id: id });
};

const findHotJobs = async () => {
  return await Job.find().limit(5);
};

module.exports = {
  add,
  update,
  drop,
  findFiveJobs,
  viewAll,
  viewOne,
  DeleteOne,
  findHotJobs,
};
