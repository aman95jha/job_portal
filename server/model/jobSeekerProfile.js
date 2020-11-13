const JobSeekerProfile = require("../schema/JobSeekerProfile");

const create = async (
  userId,
  addressLine1,
  addressLine2,
  city,
  state,
  postalcode,
  country,
  experienceYear,
  experienceMonth,
  skills,
  resumeLink,
  currentEmployer,
  currentJobDesc,
  previousEmployer,
  previousJobDesc,
  university,
  graduationSchool,
  graduationYear,
  qualifications,
  certificate,
  projects
) => {
  const data = new JobSeekerProfile({
    userId: userId,
    address: {
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      postalcode: postalcode,
      country: country,
    },
    experience: {
      year: experienceYear,
      month: experienceMonth,
    },
    skills: skills,
    resumeLink: resumeLink,
    currentEmployer: currentEmployer,
    currentJobDesc: currentJobDesc,
    previousEmployer: previousEmployer,
    previousJobDesc: previousJobDesc,
    university: university,
    graduationSchool: graduationSchool,
    graduationYear: graduationYear,
    qualifications: qualifications,
    certificate: certificate,
    projects: projects,
  });

  return await data.save();
};

const edit = async (
  id,
  addressLine1,
  addressLine2,
  city,
  state,
  postalcode,
  country,
  experienceYear,
  experienceMonth,
  skills,
  resumeLink,
  currentEmployer,
  currentJobDesc,
  university,
  graduationSchool,
  qualifications,
  certificate,
  projects
) => {
  const data = {
    address: {
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      postalcode: postalcode,
      country: country,
    },
    experience: {
      year: experienceYear,
      month: experienceMonth,
    },
    skills: skills,
    resumeLink: resumeLink,
    currentEmployer: currentEmployer,
    currentJobDesc: currentJobDesc,
    university: university,
    graduationSchool: graduationSchool,
    qualifications: qualifications,
    certificate: certificate,
    projects: projects,
  };

  return await JobSeekerProfile.updateOne({ id: id }, { $set: data });
};

module.exports = {
  create,
  edit,
};
