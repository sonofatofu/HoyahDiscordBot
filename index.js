//bring in the discord js bot
const Discord = require('discord.js');

//New client
const client = new Discord.Client();

//Listen to event
client.once('ready', () => {
    console.log('Hoyah ready!');
});

client.on('message', async message => {
	if (message.content === '/hoyah') { 
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            console.log('joined');
            const ytdl = require('ytdl-core');
            const dispatch = connection.play(ytdl('https://www.youtube.com/watch?v=UoXOnk0E2lI', { filter: 'audioonly' }));
        } else {
            message.reply('You need to be in a voice channel to use this command!');
        }

    }
});

client.login('ODczMTg5NzQzNTgyNjY2ODIy.YQ0zUQ.RpaQCasS2_0jqL4imIXnxSdQyvw');