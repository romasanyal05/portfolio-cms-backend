const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @desc    Get all contact messages (Admin use)
// @route   GET /api/contact
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create new contact message (Public form)
// @route   POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMessage = new Contact({
      name,
      email,
      message
    });

    const savedMessage = await newMessage.save();
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: savedMessage
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
