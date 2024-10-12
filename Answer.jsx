const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  pointsAwarded: { type: Number, default: 0 },  // To track how many points were given for this answer
});

module.exports = mongoose.model('Answer', answerSchema)
