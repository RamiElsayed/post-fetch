const { Router } = require("express");

const {
  getAllReviews,
  fetReviewById,
  createReview,
} = require("../../controllers/api/reviews");

const router = Router();

router.get("/", getAllReviews);
router.get("/:reviewId", fetReviewById);
router.post("/", createReview);

module.exports = router;
