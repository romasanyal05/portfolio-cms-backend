const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    title: { type: String },
    shortIntro: { type: String },
    description: { type: String }, // can store HTML content
    profileImage: { type: String },
    socials: {
      linkedin: { type: String },
      twitter: { type: String },
      github: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
