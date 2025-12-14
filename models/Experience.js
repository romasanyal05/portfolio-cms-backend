const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    currentlyWorking: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);
