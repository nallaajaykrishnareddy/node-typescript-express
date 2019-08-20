"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getTours_1 = require("./api/getTours");
const getTourDetails_1 = require("./api/getTourDetails");
const createTour_1 = require("./api/createTour");
const bodyParser = __importStar(require("body-parser"));
const deleteTour_1 = require("./api/deleteTour");
const updateTour_1 = require("./api/updateTour");
// import { CustomeRequestHandler } from "./express";
const app = express_1.default();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const logger = morgan_1.default("dev");
app.use(logger);
app.use("/static", express_1.default.static(path_1.default.resolve("./", "/public", "img")));
app.get("/", (req, res, next) => {
    res.send("Tour Booking Api");
});
app.get("/tours", getTours_1.getTours);
app.get("/tours/:id", getTourDetails_1.getTourDetails);
app.post("/tours", jsonParser, createTour_1.createTour);
app.put("/tours/:id", jsonParser, updateTour_1.updateTour);
app.delete("/tours/:id", deleteTour_1.deleteTour);
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log("server running"));
