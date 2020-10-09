require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({
    disableMentions: 'everyone'
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// Command Handler
for (const file of commandFiles) {
    const command = require(`./commands/**/${file}`);
    client.commands.set(command.name, command);
    for (const alias of command.aliases) {
        client.aliases.set(alias, command.name);
    }
}
// Event Handler
for (const file of eventFiles) {
    const event = require(`./events/**/${file}`)
    client.on(event.split('.')[0], (...args) => file(client, ...args));
}

client.login(process.env.TOKEN);