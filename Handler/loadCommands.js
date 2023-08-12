const { LoadFiles } = require('./loadFiles');

async function loadCommands(client) {
  await client.commands.clear();
  const commandsArray = [];
  const commandsFiles = await LoadFiles('SlashCommands');

  commandsFiles.forEach((file) => {
    const command = require(file);
    if (!command.name) return;
    client.commands.set(command.name, command);
    commandsArray.push(command);
  });

  client.application.commands.set(commandsArray);
}

module.exports = { loadCommands };
