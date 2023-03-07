// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Partials} = require('discord.js');

// Create a new client instance
const client = new Client({ intents: 65535, partials: [Partials.Channel, Partials.Message, Partials.GuildMember, Partials.User, Partials.Reaction, Partials.Guild] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, message => {
if (message === "ping") return message.reply("pong");
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
