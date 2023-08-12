const fs = require('fs');

const loadEmoji = (allEmojis) => {
  const emojis = allEmojis.map((emoji) => {
    return `"${emoji.name}": "<:${emoji.name}:${emoji.id}>"`;
  });

  // convert emojis to json format
  const emojisToJson = `{\n${emojis.join(',\n')}\n}`;

  // save emoji list to emoji.json
  fs.writeFileSync('./json/emoji.json', emojisToJson);
  return emojis.length;
};

module.exports = { loadEmoji };
