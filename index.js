const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'xd'; 

client.login(token); 

client.on('message', message => { 

	if(message.content.toLowerCase() === 'help')
		message.channel.send("good morning " + message.author + "!");
	else if(message.content.toLowerCase().includes('time'))
	{
		var date = new Date();
		message.channel.send('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
	}
	if(message.content.toLowerCase() === 'hello')
		message.channel.send("hi " + message.author + "(Ahora di retrasado)");
	else if(message.content.toLowerCase().includes('time'))
	{
		var date = new Date();
		message.channel.send('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
	}
	if(message.content.toLowerCase() === '!waiter')
	message.channel.send("one second " + message.author + "!");
else if(message.content.toLowerCase().includes('time'))

{
	var date = new Date();
	message.channel.send('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
}


});
