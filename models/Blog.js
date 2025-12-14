const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
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
    excerpt: {
      type: String
    },
    content: {
      type: String
    },
    coverImage: {
      type: String
    },
    tags: [
      {
        type: String
      }
    ],
    published: {
      type: Boolean,
      default: true
    },
    publishedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
