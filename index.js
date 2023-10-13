const express = require("express");
const cors = require("cors");
const phones = require("./phones.json");

const app = express();

const port = 3000;
// Use middleware
app.use(cors());
app.get("/", (req, res) => {
  res.send(`Home in port: ${port}`);
});

app.get("/phones", (req, res) => {
  console.log("All phones showing from phones.json");
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  console.log("Phone Showing:", phoneId);
  const phone = phones.find((phone) => phoneId === phone.id) || {};
  console.log(phone);
  res.send(phone);
});

app.listen(port, () => {
  console.log(`My first nodeJS listening on port: ${port}`);
});
