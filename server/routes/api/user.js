const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../model/user");
const JobSeekerProfile = require("../../model/jobSeekerProfile");
const Application = require("../../model/application");
const SaveJob = require("../../model/savejob");

// Register
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
          const userType = "user";
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
              .send({ action: "user register", data: data, error: "" });
          }
        }
      });
    }
  } catch (e) {
    res.send(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    var user = await User.findByUsername(req.body.username);
    if (user == null) {
      res.send({ error: "no user found" });
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          req.session.user = user;
          // Check if jobseeker profile has been made
          //
          res.send({ data: user });
        } else {
          res.send({ error: "password didnot match" });
        }
      });
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/profile/create", async (req, res, next) => {
  try {
    const userId = "stringUserIdToBeReclacedLater";
    const data = await JobSeekerProfile.create(
      userId,
      req.body.addressLine1,
      req.body.addressLine2,
      req.body.city,
      req.body.state,
      req.body.postalCode,
      req.body.country,
      req.body.experienceYear,
      req.body.experienceMonth,
      req.body.skills,
      req.body.resumeLink,
      req.body.currentEmployer,
      req.body.currentJobDesc,
      req.body.previousEmployer,
      req.body.previousJobDesc,
      req.body.university,
      req.body.graduationSchool,
      req.body.graduationYear,
      req.body.qualifications,
      req.body.certificate,
      req.body.projects
    );

    if (data) {
      console.log("yaha pahucha hai ");
      res.status(200).send({ data: data, error: null });
    } else {
      res.send({ error: "could not save" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "something went wrong " });
  }
});

router.post("/job/apply", async (req, res, next) => {
  // Find if application is available in database
  const uniqueApplication = await Application.findApplicationUnique(
    req.body.userId,
    req.body.jobId
  );
  console.log("unique", uniqueApplication);

  // Check if already applied
  if (uniqueApplication[0]) {
    console.log("came in already applied");
    res.status(200).send({ data: "Already applied" });
  } else {
    console.log("applying for the first time");
    // Apply
    const data = await Application.apply(req.body.jobId, req.body.userId);
    if (data) {
      res.status(200).send({ data: data, error: null });
    } else {
      res.send({ error: "could not save" });
    }
  }
});

// Get jobs by userId
router.get("/get/jobs/:userId", async (req, res, next) => {
  try {
    const data = await Application.getApplicationsByUserId(req.params.userId);
    if (data) {
      // applied jobs
      console.log("applied jobs");
      console.log(data);
      res.status(200).send({ data: data });
    } else {
      // Not applied yet
      console.log("not applied yet");
      res.status(200).send({ data: [] });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/job/save", async (req, res) => {
  try {
    const uniqueSavedJob = await SaveJob.findSavedJobUnique(
      req.body.userId,
      req.body.jobId
    );
    console.log(uniqueSavedJob);
    if (uniqueSavedJob[0]) return res.status(400).send("Already saved");

    const data = await SaveJob.saveJob(req.body.userId, req.body.jobId);

    if (data) return res.status(200).send({ data: data });
    return res.status(400).send("Couldnot save. Somthing went Wrong");
  } catch (error) {
    console.log(error);
  }
});

router.get("/job/saved/:userId", async (req, res, next) => {
  try {
    const data = await SaveJob.findMySavedJobs(req.params.userId);
    if (data) return res.status(200).send({ data: data });

    return res.status(400).send("CouldNot find Jobs");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
