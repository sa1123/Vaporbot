const Discord = require('discord.js');

const { prefix, token } = require('./config.json');
const client = new Discord.Client();

const { PythonShell } = require('python-shell');

const randomPuppy = require('random-puppy');

client.once('ready', () => {
	console.log(`\nLogged in as ${client.user.tag}!\n`);
});

client.on('message', msg => {
	if (msg.content === ('yee') || msg.content === ('Yee') || msg.content === ('hee') || msg.content === ('Hee')) {
		msg.channel.send('haw');
	}
});

client.on('message', msg => {
	if (msg.content === prefix + 'md') {
		PythonShell.run('scraper.py', null, function(err, result) {
			if (err) throw err;
			msg.channel.send(result[0]);
			console.log(result[0]);
		});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + '9g') {
		PythonShell.run('9scrap.py', null, function(err, result) {
			if (err) throw err;
			msg.channel.send(result[0]);
			console.log(result[0]);
		});
	}
});


client.on('message', msg => {
	if (msg.content === prefix + ('gt')) {
		randomPuppy('greentext')
			.then(url => {
				console.log(url);
				msg.channel.send(url);
			});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + ('vw')) {
		randomPuppy('vaporglow')
			.then(url => {
				console.log(url);
				msg.channel.send(url);
			});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + ('gcj')) {
		randomPuppy('guitarcirclejerk')
			.then(url => {
				console.log(url);
				msg.channel.send(url);
			});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + ('hm')) {
		randomPuppy('HistoryMemes')
			.then(url => {
				console.log(url);
				msg.channel.send(url);
			});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + ('hu')) {
		randomPuppy('HolUp')
			.then(url => {
				console.log(url);
				msg.channel.send(url);
			});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + ('pepe')) {
		randomPuppy('Apustaja')
			.then(url => {
				console.log(url);
				msg.channel.send(url);
			});
	}
});

client.on('message', msg => {
	if (msg.content === prefix + ('help')) {
		msg.channel.send('The prefix is ">"\nUse md for a random meme straight outta ol` faithful\nhu for holdup\nhm for historymeme\ngt for greentext\nvw for vaporwave\ngcj for guitarcj\npepe for a rarepepe');
	}
});

client.login(token);