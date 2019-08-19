import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Tour Booking Api");
});

app.get("/tours", (req, res, next) => {
  res.send("Get a list of tours...");
});
app.post("/tours", (req, res, next) => {
  res.send("Add new tour");
});

app.listen(5001, () => console.log("server running"));
