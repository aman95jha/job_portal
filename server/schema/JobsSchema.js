const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
    // postedBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    postedBy: { type: String },
    jobId: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: true },
    responsibility: { type: String, required: true },
    companyName: { type: String, required: true },
    experience: { type: Number, required: true },
    salaryRange: {
      min: { type: Number, min: 0 },
      max: { type: Number, min: 0 },
    },
    noOfPositions: { type: Number, min: 0 },
    location: { type: String, required: true },
    skills: { type: String, required: true },
    degree: { type: String, required: true },
    companyInfo: { type: String },
    employmentType: { type: String },
    searchKeywords: [String],
    jobDesc: { type: String },
    drop: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
