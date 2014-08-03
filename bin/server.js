var tty = require('tty.js');

var conf = tty.config.readConfig();
var app = tty.createServer(conf);

app.listen();
