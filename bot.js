const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Nigga') {
    	message.channel.send('No u');
  	}
});

client.on('message', message => {
    if (message.content === 'Account') {
    	message.reply('STILL FIXING THIS BOT');
  	}
});

client.on('message', message => {
    if (message.content === 'Tell Me About Movic') {
    	message.reply('The Most Handsome People In The World');
  	}
});

client.on('message', message => {
    if (message.content === 'spotify') {
    	message.reply('https://pastebin.com/nPHyEisS');
  	}
});

client.on('message', message => {
    if (message.content === 'Giveaway please') {
    	message.reply('Next Time BB <3');
  	}
});

client.on('message', message => {
    if (message.content === 'Shop') {
    	message.reply('@Amy#8965 Shop,https://selly.gg/@Loundy');
  	}
});

function readTextFile() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "testing.txt", true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
      document.getElementById("textSection").innerHTML = allText;
    }
  }
  rawFile.send();
}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
