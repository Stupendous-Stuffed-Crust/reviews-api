const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  review_id: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  recommend: {
    type: Boolean,
    required: true
  },
  response: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  reviewer_name: {
    type: String,
    required: true
  },
  helpfulness {
    type: Number,
    required: true
  },
  photos: [
    {
      id: {
        type: Number,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ]
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;