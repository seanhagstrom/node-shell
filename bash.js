const path = require('path');
const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');



process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    pwd()
  } else if(cmd === 'ls') {
    ls()
  } else if(cmd.includes('cat')) {
    let cmdArr = cmd.split(' ');
    cat(cmdArr[1])
  }
});


