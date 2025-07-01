const express = require('express');
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put('/:id', auth, async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;