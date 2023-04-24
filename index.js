const express = require("express");
const handler = require("./outer");
const cookieParser = require("cookie-parser");
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouuter');

const app = express();

app.use("/admin", adminRouter);
app.use('/', publicRouter);


app.listen(3000, () => {
  console.log("listening port 3000");
});
