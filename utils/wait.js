/**
 * @param {number} ms - The number of milliseconds to wait.
 */
function wait(ms) {
  return Promise((resolve) => setTimeout(resolve, ms));
}
module.exports = wait;
