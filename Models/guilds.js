const mongoose = require('mongoose');

const guild = new mongoose.Schema({
  guild_id: String,
  owner_id: String,
});

module.exports = mongoose.model('guild', guild);
