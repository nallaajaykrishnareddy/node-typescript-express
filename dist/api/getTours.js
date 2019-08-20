"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../data/Data");
const tourSummary_1 = require("../model/shared/tourSummary");
exports.getTours = (req, res, next) => {
    res.json(Data_1.DataStore.tours.map((item) => new tourSummary_1.TourSummary(item)));
};
