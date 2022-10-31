const express = require("express");
const path = require("path");
const fs = require("fs");
const htmlRouters = require("./router/htmlRouters");
const apiRoutes = require("./router/ApiRouter");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRouters);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
