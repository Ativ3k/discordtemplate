const client = require('../index');
const Logger = require('../utils/logger');

// Interaction docs: https://discord.js.org/#/docs/main/stable/class/Interaction
// Event interactionCreate =  Emitted when an interaction is created. https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
client.on('interactionCreate', async (interaction) => {
  // Slash commands
  const command = client.commands.get(interaction.commandName);
  // If command doesnt exist
  if (!command) return client.commands.delete(interaction.commandName);

  // Log who used command and where
  Logger.cmd(
    `${interaction.user.tag} used ${interaction.commandName} command. Channel: ${interaction.channelId}, Server: ${interaction.guildId}`,
  );
  return command.run(client, interaction); // Running the command
});
