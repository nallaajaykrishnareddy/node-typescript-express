import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../data/Data";
export const updateTour: RequestHandler = (req, res, next) => {
  const tourId = req.params.id;
  const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourId);
  if (tourIndex > -1) {
    const newTour = {
      id: uuid(),
      location: req.body.location || "",
      tourTitle: req.body.tourTitle || "",
      tourCategory: req.body.tourCategory || "",
      tourDescription: req.body.tourDescription || "",
      price: req.body.price || "",
      currency: req.body.currency || "",
      img: req.body.img
    };
    DataStore.tours[tourIndex] = newTour;
    res.json({ status: "success", message: "Successfully Updated" });
  } else {
    res.json({ status: "error", message: "Element not found" });
  }
  res.send("New Tour added");
};
