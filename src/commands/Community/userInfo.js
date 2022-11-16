const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require('moment');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Check out a users (or your own) Discord account details'),

    execute(message, args, commandName, client, Discord) {
        const Target = message.mentions.users.first() || message.author;
        const Member = message.guild.members.cache.get(Target.id);

        const response = new MessageEmbed()
            .setAuthor(`${Target.username}`, Target.displayAvatarURL({ dynamic: true }))
            .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
            .setColor('NOT_QUITE_BLACK')
            .addField("UserID - ", `${Target.id}`, false)
            .addField("Roles - ", `${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
            .addField("Server Member Since - ", `${moment(Member.joinedAt('MMMM DD YYYY, h:mm:ss'))}`)
            .addField("Discord Member Since - ", `${moment(Target.createdAt('MMMM DD YYYY, h:mm:ss'))}`)
        message.reply({ embeds: [response] })
    }
}