const ejs = require("ejs");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const express = require("express");
const session = require("express-session");

const { Keyboard } = require("puppeteer");
const BodyParser = require("body-parser");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const user_router = require("./Routes/UserRoutes");
const email_router = require("./Routes/EmailRoutes");

require("dotenv").config();
require("./config/databaseConnection");

const app = express();
const PORT = process.env.PORT || 4001;
jwtSecretKey = "loveee";
const googleUsername = "roameramit2001@gmail.com";
const googlePassword = "@mit12345678";
// const googleUsername = "yogesh1pqr@gmail.com";
// const googlePassword = "@mit12345678";

puppeteer.use(StealthPlugin());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY || "sectionSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(BodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(
  "/css",
  express.static(path.join(__dirname, "../frontend/template/css"))
);
app.use(
  "/fonts",
  express.static(path.join(__dirname, "../frontend/template/fonts"))
);
app.use(
  "/images",
  express.static(path.join(__dirname, "../frontend/template/images"))
);
app.use("/js", express.static(path.join(__dirname, "../frontend/template/js")));
app.use(
  "/pages",
  express.static(path.join(__dirname, "../frontend/template/pages"))
);
app.use(
  "/partials",
  express.static(path.join(__dirname, "../frontend/template/partials"))
);
app.use(
  "/scss",
  express.static(path.join(__dirname, "../frontend/template/scss"))
);
app.use(
  "/vendors",
  express.static(path.join(__dirname, "../frontend/template/vendors"))
);
app.use(
  "/plugins",
  express.static(path.join(__dirname, "../frontend/plugins"))
);

app.use(user_router);
app.use(email_router);

// Set Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/template"));

// Listning The Server
app.listen(PORT, () => {
  console.log(`Server Is On the work ${PORT}`);
});


app.get("/star", (req, res) => {
  try {
    res.send("Welcome Starting")
  } catch (error) {
    console.log(error);
  }
})