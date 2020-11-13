const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema(
  {
    jobId: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    viewed: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false },
    accepted: { type: Boolean, default: false },
    suggestion: { type: String },
    drop: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", ApplicationSchema);
module.exports = Application;
