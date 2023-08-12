const { LoadFiles } = require('./loadFiles');

async function loadEvents() {
  return LoadFiles('Events');
}

module.exports = { loadEvents };
