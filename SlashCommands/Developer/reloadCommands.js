const { Client, CommandInteraction, ApplicationCommandType } = require('discord.js');
const { glob } = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob);
const { loadCommands } = require('../../Handler/loadCommands');

// Command object: https://discord.com/developers/docs/interactions/application-commands#application-command-object
module.exports = {
  name: 'reload',
  description: 'Reload commands.',
  type: ApplicationCommandType.ChatInput, // Docs: https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandType
  dm_permission: 0, // Docs: Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
  defaultMemberPermissions: 'Administrator', // Docs: https://discord.js.org/#/docs/main/stable/class/Permissions

  /**
   * @param {Client} client // Docs: https://discord.js.org/#/docs/main/stable/class/Client
   * @param {CommandInteraction} interaction // Docs: https://discord.js.org/#/docs/main/stable/class/CommandInteraction
   */

  run: async (client, interaction, message) => {
    for (const [key, value] of client.commands) client.removeListener(`commands`, value.run, true);
    await loadCommands(client);

    interaction.reply({ content: `✅ Pomyślnie przeładowano komendy!`, ephemeral: true });
  },
};
