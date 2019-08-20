"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../data/Data");
const tourDetail_1 = require("../model/shared/tourDetail");
const static_1 = require("../general/static");
exports.getTourDetails = (req, res, next) => {
    const tourId = req.params.id;
    const selectedTour = Data_1.DataStore.tours.find((item) => item.id === tourId);
    if (selectedTour) {
        const imageURLs = selectedTour.img.map(static_1.fileMapper(req.app.get("env")));
        const selectedTourReviews = Data_1.DataStore.reviews.filter((item) => item.tourID === tourId);
        res.json(new tourDetail_1.TourDetail(selectedTour, selectedTourReviews, imageURLs));
    }
    else {
        res.json({ status: "failed", message: "Element not found" });
    }
};
