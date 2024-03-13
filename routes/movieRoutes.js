const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/", movieController.addMovie);

router.post("/:id/reviews", movieController.addReviewToMovie);

router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovie);

router.get("/:id/reviews", movieController.getAllReviews);

router.get("/:id/averageRating", movieController.getAvgRating);

router.put("/:id", movieController.updateMovie);

router.put("/:movieId/reviews/:reviewId", movieController.updateReview);

router.delete("/:id", movieController.deleteMovie);

router.delete("/:movieId/reviews/:reviewId", movieController.deleteReview);

module.exports = router;