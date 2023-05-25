const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  product_id: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
  summary: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
  recommend: {
    type: Boolean,
    required: true
  },
  reviewer_name: {
    type: String,
    required: true
  },
  reviewer_email: {
    type: String,
    required: true
  }
  response: {
    type: String,
    required: false
  },
  helpfulness {
    type: Number,
    required: true
  }
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;