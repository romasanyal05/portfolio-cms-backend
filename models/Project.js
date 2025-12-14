const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String
    },
    tech: [
      {
        type: String
      }
    ],
    liveLink: {
      type: String
    },
    repoLink: {
      type: String
    },
    coverImage: {
      type: String
    },
    galleryImages: [
      {
        type: String
      }
    ],
    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
