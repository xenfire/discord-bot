require('dotenv').config();

module.exports = {
    run: (client) => {
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setActivity(`${process.env.PREFIX}help`, {
            type: 'WATCHING'
        });
    }
}