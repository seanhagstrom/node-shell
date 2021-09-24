process.stdout.write('prompt > ');

module.exports = function() {
  process.stdout.write(`${process.cwd()}`)
  console.log()
  process.stdout.write('prompt > ');
};
