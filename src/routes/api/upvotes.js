const  { Router } = require('express');
const {
    getUpvotesByReviewId,
    createUpvotesByReviewId
} = require('../../controllers/api/upvotes')

const router = Router();

router.get('/:reviewId', getUpvotesByReviewId);
router.post('/:reviewId', createUpvotesByReviewId);

module.exports = router;