const client = require('../index');

const ownerId = process.env.OWNER_ID;
let oneTimeReply = false;

// Message docs: https://discord.js.org/#/docs/main/stable/class/Message
// Event messageCreate = Emitted whenever a message is created. https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageCreate
client.on('messageCreate', async (message) => {
  if (message.author.id === ownerId && !oneTimeReply) {
    message.reply({ content: `Hej! Jesteś moim Twórcą! 🎉` });
    oneTimeReply = true;
  }
});
