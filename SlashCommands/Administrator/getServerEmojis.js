const { Client, CommandInteraction, ApplicationCommandType } = require('discord.js');
const { loadEmoji } = require('../../json/getEmoji');

// Command object: https://discord.com/developers/docs/interactions/application-commands#application-command-object
module.exports = {
  name: 'getallemoji',
  description: 'Save all server emoji to json file.',
  type: ApplicationCommandType.ChatInput, // Docs: https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandType
  dm_permission: 0, // Docs: Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
  defaultMemberPermissions: 'Administrator', // Docs: https://discord.js.org/#/docs/main/stable/class/Permissions

  /**
   * @param {Client} client // Docs: https://discord.js.org/#/docs/main/stable/class/Client
   * @param {CommandInteraction} interaction // Docs: https://discord.js.org/#/docs/main/stable/class/CommandInteraction
   */

  run: async (client, interaction) => {
    const allEmojis = await interaction.guild.emojis.cache.filter((emoji) => !emoji.animated);
    await interaction.reply({
      content:
        `Zrobione! Liste emoji znajdziesz w **\`./json/emoji.json\`**!\n` +
        `Dodano łącznie ${allEmojis.size} emoji!\n` +
        `Aby użyć emoji w wiadomościach musisz najpierw je importować. Przykład:\n` +
        "```js\nconst emoji = require('./json/emoji.json')" +
        '\nconsole.log(emoji.nazwaEmoji)```\n',
    });
    loadEmoji(allEmojis);
  },
};
