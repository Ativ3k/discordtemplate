const { Client, CommandInteraction, ApplicationCommandType, EmbedBuilder } = require('discord.js');

// Command object: https://discord.com/developers/docs/interactions/application-commands#application-command-object
module.exports = {
  name: 'helloworldembed',
  description: 'Hello world! (embed)',
  type: ApplicationCommandType.ChatInput, // Docs: https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandType
  dm_permission: 0, // Docs: Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.

  /**
   * @param {Client} client // Docs: https://discord.js.org/#/docs/main/stable/class/Client
   * @param {CommandInteraction} interaction // Docs: https://discord.js.org/#/docs/main/stable/class/CommandInteraction
   */

  run: async (client, interaction) => {
    // Docs: https://discord.js.org/#/docs/main/stable/class/MessageEmbed
    const embed = new EmbedBuilder()
      .setTitle(`${interaction.user.tag}`)
      .setColor('Green')
      .setDescription('Hello world!');
    interaction.reply({ embeds: [embed] });
  },
};
