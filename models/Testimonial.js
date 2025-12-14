const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String
    },
    company: {
      type: String
    },
    message: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
