const client = require('../index');
const Logger = require('../utils/logger');

// Docs: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
// Event guildMemberRemove =  Emitted whenever a member leaves a guild, or is kicked.
client.on('guildMemberRemove', async (member) => {
  return Logger.event(
    `Member has left the server. ${member.user.tag} (${member.id}), Server: ${member.guild.name} (${member.guild.id}) `,
  );
});
