require('./geo');
var token = '';

var Bot = require('node-telegram-bot-api'),
 bot = new Bot(token, { polling: true });

bot.onText(/^\/test/, function (msg, match) {
 console.log('test - sending location', msg);
 bot.sendLocation(msg.chat.id, '38.2123213', '52.2342342').then(function () {
 });
})

bot.on('location', function (msg) {
 console.log('location >>> ', msg.location.latitude, msg.location.longitude);
 bot.sendLocation(msg.chat.id, '38.2123213', '52.2342342').then(function () {
 });
});