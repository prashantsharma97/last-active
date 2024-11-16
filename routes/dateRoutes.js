import express from "express";
import dateController from "../src/contollers/dateControllers.js";

const router = express.Router();

// Route to get a formatted date
router.get("/:id", dateController.getFormattedDate);

// Route to add a date
router.post("/", dateController.addDate);

export default router;
