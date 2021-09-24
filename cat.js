const fs = require('fs')

module.exports = function(fileName) {
  fs.readFile(fileName, (err, files) => {
    if(err) {
      throw err
    } else {
      process.stdout.write(files)
      console.log()
      process.stdout.write('prompt > ');
    }
  })
}
