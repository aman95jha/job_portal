require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var expressSession = require("express-session");
const cors = require("cors");

const api = require("./routes/api/api");

const app = express();

var whitelist = ["http://localhost:8000", "http://localhost:8080"];

//white list consumers

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "TechmonkIsCoolmonk",
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false },
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/api", api);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "Error in DB Connection : " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

app.listen(process.env.PORT, () => {
  console.log("express setup complete");
});
