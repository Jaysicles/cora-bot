require('dotenv').config();
const { Discord, GatewayIntentBits, Client } = require("discord.js");
const discordToken = `${process.env['DISCORD_TOKEN']}`;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessageTyping
    ]
});


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
})
client.login(discordToken);