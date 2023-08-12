const chalk = require('chalk');
const { connect, default: mongoose } = require('mongoose');
const moment = require('moment');
const { EmbedBuilder, ApplicationRoleConnectionMetadata } = require('discord.js');
const client = require('../index');
const { loadCommands } = require('../Handler/loadCommands');
const guilds = require('../Models/guilds');
const logger = require('../utils/logger');
const { dependencies } = require('../package.json');
const Logger = require('../utils/logger');
const { loadEvents } = require('../Handler/loadEvents');

client.on('ready', async () => {
  await loadCommands(client);
  // Presence
  const arrayOfStatus = ['x=1', 'x=y+2'];
  setInterval(() => {
    client.user.setPresence({
      activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }],
      status: 'online',
    });
  }, 15000); // refresh presence every 15 seconds.

  // startup logs
  Logger.log(chalk.red.bold('——————————[Informacje]——————————'));
  Logger.log(
    chalk.white(
      `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) > 1 ? 'Użytkowników: ' : 'Użytkownik: '}`,
    ),
    chalk.red(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
    chalk.white(' || '),
    chalk.white(`${client.guilds.cache.size > 1 ? 'Serwery: ' : 'Serwer: '}`),
    chalk.red(`${client.guilds.cache.size}`),
  );
  Logger.log(chalk.white(`Slash komendy: `), chalk.red(`${client.commands.size}`));

  Logger.log(chalk.red.bold('——————————[Statystyki]——————————'));
  Logger.log(
    chalk.white(`Uruchomiony na Node `),
    chalk.green(process.version),
    chalk.white(' na '),
    chalk.yellow(`${process.platform} ${process.arch}`),
  );
  Logger.log(
    chalk.white('Pamięć:'),
    chalk.green(` ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} `),
    chalk.white('MB'),
  );
  Logger.log(
    chalk.white('RSS:'),
    chalk.green(` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} `),
    chalk.white('MB'),
  );
  Logger.log(chalk.white('Discord.js Version: '), chalk.green(dependencies['discord.js']));
  Logger.log(chalk.red.bold('——————————[Połączenie]——————————'));
  Logger.ready(
    chalk.white('Pomyślnie połączono z'),
    chalk.red(` ${client.user.tag} `),
    chalk.white('('),
    chalk.green(client.user.id),
    chalk.white(')'),
  );
  mongoose.set('strictQuery', false);
  connect(process.env.MONGO_CONNECTION_URL, {}).then(
    Logger.ready(chalk.white('Pomyślnie połączono z '), chalk.red(`Mongoose Data Base`)),
  );

  // add all missing guilds from client.guilds.cache to database
  client.guilds.cache.forEach(async (guild) => {
    const isInDatabase = await guilds.findOne({ guild_id: guild.id });
    if (!isInDatabase) {
      await new guilds({
        guild_id: guild.id,
        owner_id: guild.ownerId,
      }).save();
      Logger.log(`Added new guild to database! ID: ${guild.id}`);
    }
  });
});
