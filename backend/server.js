const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const homeRoute = require("./routes/home.route.js");
const contactRoute = require("./routes/contact.route.js");
const aboutRoute = require("./routes/about.route.js");
const projectsRoute = require("./routes/projects.route.js");
const skillsRoute = require("./routes/skills.route.js");
const contentRoute = require("./routes/content.route.js");
const authRoute = require("./routes/auth.route.js");
const servicesRoute = require("./routes/services.route.js");
const formRoute = require("./routes/form.route.js");
const corsMiddleWare = require("./middlewares/cors.middleware.js");
const connectDB = require("./config/db.config.js");
const path = require("path");


const PORT = 8000;
const app = express();
app.use(corsMiddleWare);
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/api/home", homeRoute);
app.use("/api/about", aboutRoute);
app.use("/api/contact", contactRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/content", contentRoute);
app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/services", servicesRoute);
app.use("/api/form", formRoute);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
