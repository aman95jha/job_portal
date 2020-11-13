const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaveJobSchema = new Schema(
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
    drop: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const SaveJob = mongoose.model("SaveJob", SaveJobSchema);
module.exports = SaveJob;
