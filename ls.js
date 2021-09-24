const fs = require('fs');

module.exports = function () {
fs.readdir('./', 'utf8', (err, files) => {
  if(err) {
    throw err
  } else {
    process.stdout.write(files.join('\n'))
    console.log()
    process.stdout.write('prompt > ');
  }
})
}
