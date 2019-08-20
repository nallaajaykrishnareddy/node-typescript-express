"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../data/Data");
exports.deleteTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = Data_1.DataStore.tours.findIndex((item) => item.id === tourId);
    if (tourIndex > -1) {
        Data_1.DataStore.tours.splice(tourIndex, 1);
        res.json({ status: "success", message: "Element Removed" });
    }
    else {
        res.json({ status: "error", message: "Element not found" });
    }
};
