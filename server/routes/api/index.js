const express = require("express");
const Job = require("../../schema/JobsSchema");
const router = express.Router();
const Jobs = require("./../../model/job");

// Home page
router.get("/search", async (req, res, next) => {
  const data = await Jobs.findFiveJobs();
  res.send({ data: data });
});
router.get("/job/view/:id", async (req, res, next) => {
  const data = await Jobs.viewOne(req.params.id);
  res.status(200).send({ job: data });
});

router.get("/hotjobs", async (req, res, next) => {
  const data = await Jobs.findHotJobs();
  if (data) {
    return res.status(200).send({ data: data });
  }
  return res.status(400).send("Could not provide you anything");
});

module.exports = router;
