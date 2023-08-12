const chalk = require('chalk');
const moment = require('moment');

const date = `${moment().format('DD-MM-YYYY HH:mm:ss')}`;

module.exports = class Logger {
  static warn(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgYellow(`|WARN|`)} ${content.join('') || content[0]}`);
  }

  static error(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgRed(`|ERROR|`)} ${content.join('') || content[0]}`);
  }

  static cmd(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgWhite(`|CMD|`)} ${content.join('') || content[0]}`);
  }

  static event(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgGreen(`|EVENT|`)} ${content.join('') || content[0]}`);
  }

  static ready(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgGreen(`|READY|`)} ${content.join('') || content[0]}`);
  }

  static job(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgGreen(`|JOB|`)} ${content.join('') || content[0]}`);
  }

  static log(...content) {
    return console.log(`[${chalk.gray(date)}]: ${chalk.black.bgBlue(`|LOG|`)} ${content.join('') || content[0]}`);
  }
};
