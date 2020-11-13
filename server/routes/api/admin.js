const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../model/user");
const Job = require("../../model/job");
const Application = require("../../model/application");

// H
router.post("/register", async (req, res, next) => {
  console.log(req.body);
  try {
    const data = await User.findExistingUser(req.body.email, req.body.username);

    if (data.length > 0) {
      res.status(200).send({ data: "user already exist" });
    } else {
      bcrypt.hash(req.body.password, 10, async (error, encrypted) => {
        if (error) {
          console.log(error);
          res.status(422).send({ error: error });
        } else {
          const userType = "admin";
          const data = await User.register(
            req.body.username,
            req.body.email,
            req.body.phone,
            req.body.profileImage,
            encrypted,
            userType
          );

          if (data) {
            res
              .status(200)
              .send({ action: "Admin user register", data: data, error: null });
          }
        }
      });
    }
  } catch (e) {
    res.send(e);
  }
});

router.use("/login", async (req, res, next) => {
  try {
    var user = await User.findByUsername(req.body.username);
    if (user == null) {
      res.send({ data: null, error: "no user found" });
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          req.session.user = user;
          res.send({ data: user });
        } else {
          res.send({ data: null, error: "password didnot match" });
        }
      });
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/job/add", async (req, res, next) => {
  try {
    const userId = "RandomUserid_correctItLater";
    const data = await Job.add(
      userId,
      req.body.jobId,
      req.body.title,
      req.body.role,
      req.body.responsibility,
      req.body.companyName,
      req.body.experience,
      req.body.noOfPositions,
      req.body.location,
      req.body.skills,
      req.body.degree,
      req.body.companyInfo,
      req.body.employmentType,
      req.body.keyWords,
      req.body.jobDesc,
      req.body.salaryMin,
      req.body.salaryMax
    );
    if (data) {
      res.status(200).send({ data: data, error: null });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
});

router.get("/jobs/view/all", async (req, res, next) => {
  try {
    const data = await Job.viewAll();
    res.status(200).send({ jobs: data, error: "none" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/job/update/:id", async (req, res, next) => {
  try {
    const data = await Job.update(
      req.params.id,
      req.body.jobId,
      req.body.title,
      req.body.role,
      req.body.responsibility,
      req.body.companyName,
      req.body.experience,
      req.body.noOfPositions,
      req.body.location,
      req.body.skills,
      req.body.degree,
      req.body.companyInfo,
      req.body.employmentType,
      req.body.keyWords,
      req.body.jobDesc,
      req.body.salaryMin,
      req.body.salaryMax
    );
    if (data) {
      console.log(data);
      res.status(200).send({ data: data, error: null });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
});

router.get("/jobs/view/all", async (req, res, next) => {
  try {
    const data = await Job.viewAll();
    res.status(200).send({ jobs: data, error: "none" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/view/:id", async (req, res, next) => {
  const data = await Job.viewOne(req.params.id);
  res.status(200).send({ job: data });
});

router.get("/job/delete/:id", async (req, res, next) => {
  console.log(req.params.id);
  const data = await Job.DeleteOne(req.params.id);
  console.log(data);
  if (data) {
    res.status(200).send({ data: "success" });
  } else {
    res.status(400).send("No");
  }
});

router.get("/applications", async (req, res, next) => {
  const data = await Application.getAllApplications();
  console.log("inside route:", data);
  if (data) {
    res.status(200).send({ data: data });
  } else {
    res.status(400).send({ data: "error" });
  }
});
module.exports = router;
