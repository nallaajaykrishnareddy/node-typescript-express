"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const Data_1 = require("../data/Data");
exports.updateTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = Data_1.DataStore.tours.findIndex((item) => item.id == tourId);
    if (tourIndex > -1) {
        const newTour = {
            id: v4_1.default(),
            location: req.body.location || "",
            tourTitle: req.body.tourTitle || "",
            tourCategory: req.body.tourCategory || "",
            tourDescription: req.body.tourDescription || "",
            price: req.body.price || "",
            currency: req.body.currency || "",
            img: req.body.img
        };
        Data_1.DataStore.tours[tourIndex] = newTour;
        res.json({ status: "success", message: "Successfully Updated" });
    }
    else {
        res.json({ status: "error", message: "Element not found" });
    }
    res.send("New Tour added");
};
