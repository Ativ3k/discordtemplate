const client = require('../index');
const Logger = require('../utils/logger');

// Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
// Event guildMemberAdd =  Emitted whenever a user joins a guild.
client.on('guildMemberAdd', async (member) => {
  return Logger.event(
    `Member has joined the server ${member.user.tag} (${member.id}), Server: ${member.guild.name} (${member.guild.id})`,
  );
});
