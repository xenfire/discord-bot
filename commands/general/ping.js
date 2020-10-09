const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping Discord for the API and Latency',
    aliases: ['pong'],
    usage: 'ping',
    run: async (client, message, _args, _utils) => {
        let msg = await message.channel.send('Pinging... :ping_pong:');
        let api = client.ws.ping;
        let latency = msg.createdTimestamp - message.createdTimestmpa;
        const embed = new MessageEmbed()
            .setAuthor('Pong! 🏓')
            .addField('Latency :hourglass:', `${latency}ms`)
            .addField('API :heartbeat:', `${api}ms`)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp();
        return message.channel.send(embed);
    }
}