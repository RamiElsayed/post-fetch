const reviews = require("../../db/reviews");
const uuid = require("../../helpers/uuid");

const getAllReviews = (req, res) => {
  console.info(`GET /api/reviews`);
  res.status(200).json(reviews);
};

const getReviewById = (req, res) => {
  console.info(`${req.method} request received to get a single a review`);

  const { reviewId } = req.params;
  if (reviewId) {
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        return res.json(currentReview);
      }
    }

    return res.status(404).send("Review not found");
  } else {
    return res.status(400).send("Review ID not provided");
  }
};
const createReview = (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // TODO: Add a comment describing the functionality of following line of code:
  const { product, review, username } = req.body;

  // TODO: Add a comment describing why we would check to see if the following properties exist before entering the code block
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    return res.status(201).json({
      status: "success",
      body: newReview,
    });
  } else {
    res.status(500).json("Error in posting review");
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
};
