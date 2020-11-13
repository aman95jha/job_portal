const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSeekerProfileSchema = new Schema(
  {
    // user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    userId: { type: String },
    address: {
      addressLine1: { type: String },
      addressLine2: { type: String },
      city: { type: String },
      state: { type: String },
      postalcode: { type: String },
      country: { type: String },
    },
    experience: {
      year: { type: Number },
      month: { type: Number },
    },
    skills: [String],
    resumeLink: { type: String },
    currentEmployer: { type: String },
    currentJobDesc: { type: String },
    currentExperience: { type: Number },
    previousEmployer: { type: String },
    previousJobDesc: { type: String },
    university: { type: String },
    graduationSchool: { type: String },
    graduationYear: { type: String },
    qualifications: { type: String },
    certificate: { type: String },
    projects: { type: String },
  },
  { timestamps: true }
);

const JobSeekerProfile = mongoose.model(
  "JobSeekerProfile",
  JobSeekerProfileSchema
);
module.exports = JobSeekerProfile;
