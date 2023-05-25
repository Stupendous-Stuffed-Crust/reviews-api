const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewPhotoSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  review_id: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Review = mongoose.model("ReviewPhoto", ReviewPhotoSchema);

module.exports = ReviewPhoto;