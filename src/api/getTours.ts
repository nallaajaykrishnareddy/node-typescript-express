import { RequestHandler } from "express";
import { DataStore } from "../data/Data";
import { TourSummary } from "../model/shared/tourSummary";

export const getTours: RequestHandler = (req, res, next) => {
  res.json(DataStore.tours.map((item: any) => new TourSummary(item)));
};
