import { RequestHandler } from "express";
import { DataStore } from "../data/Data";
import { TourDetail } from "../model/shared/tourDetail";
import { fileMapper } from "../general/static";

export const getTourDetails: RequestHandler = (req, res, next) => {
  const tourId = req.params.id;
  const selectedTour = DataStore.tours.find((item: any) => item.id === tourId);
  if (selectedTour) {
    const imageURLs = selectedTour.img.map(fileMapper(req.app.get("env")));
    const selectedTourReviews = DataStore.reviews.filter(
      (item: any) => item.tourID === tourId
    );

    res.json(new TourDetail(selectedTour, selectedTourReviews, imageURLs));
  } else {
    res.json({ status: "failed", message: "Element not found" });
  }
};
