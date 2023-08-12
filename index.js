require('dotenv').config();

const { Collection, Client, IntentsBitField, Partials } = require('discord.js');
const { loadEvents } = require('./Handler/loadEvents');

const myIntents = new IntentsBitField(131071); // Docs: https://discord.com/developers/docs/topics/community-resources#intent-calculators

const client = new Client({
  allowedMentions: {
    repliedUser: true,
    parse: ['users', 'roles', 'everyone'],
  },
  intents: myIntents,
  partials: [Partials.Channel, Partials.Message, Partials.Reaction], // Docs: https://discord.js.org/#/docs/main/stable/typedef/PartialType
});

client.commands = new Collection();
// client docs: https://discord.js.org/#/docs/main/stable/class/Client
client.login(process.env.TOKEN);
loadEvents(client);
module.exports = client;
