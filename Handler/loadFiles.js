const { glob } = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob);

async function LoadFiles(dirName) {
  // load slashcommands files
  if (dirName === 'SlashCommands') {
    const commandsFiles = await globPromise(`${process.cwd()}/${dirName}/**/*.js`); // path to slashcommands files
    commandsFiles.forEach((file) => delete require.cache[require.resolve(file)]);
    return commandsFiles;
  }
  // load event files
  if (dirName === 'Events') {
    const eventFiles = await globPromise(`${process.cwd()}/${dirName}/*.js`); // path to events
    return eventFiles.map(async (filePaths) => require(filePaths));
  }
}

module.exports = { LoadFiles };
