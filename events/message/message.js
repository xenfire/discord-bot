require('dotenv').config();
const utils = require('../../utils');

module.exports = {
    run: async (client, message) => {
        const mentionRegex = RegExp(`^<@!?${this.client.user.id}>$`);
        const prefix = process.env.PREFIX;

        if (message.author.bot) return;
        if (!message.content.startsWith(prefix) && !message.content.match(mentionRegex));

        if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${prefix}\`.`);

        const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
        if (command) {
            if (command.args) return message.channel.send(`No enough arguments provided. Correct usage: \`${command.usage}\``);
            if (command.guildOnly) return message.channel.send('Sorry, this command can only be used in servers!');

            command.run(client, message, args, utils);
        }
    }
}