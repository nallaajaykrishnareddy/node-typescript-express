import express from "express";
import { getTours } from "./api/getTours";
import { getTourDetails } from "./api/getTourDetails";
import { createTour } from "./api/createTour";
import * as bodyParser from "body-parser";
import { deleteTour } from "./api/deleteTour";
import { updateTour } from "./api/updateTour";
// import { CustomeRequestHandler } from "./express";
const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
import morgan from "morgan";
import path from "path";
const logger = morgan("dev");
app.use(logger);
app.use("/static", express.static(path.resolve("./", "/public", "img")));
app.get("/", (req, res, next) => {
  res.send("Tour Booking Api");
});

app.get("/tours", getTours);
app.get("/tours/:id", getTourDetails);
app.post("/tours", jsonParser, createTour);
app.put("/tours/:id", jsonParser, updateTour);
app.delete("/tours/:id", deleteTour);

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => console.log("server running"));
