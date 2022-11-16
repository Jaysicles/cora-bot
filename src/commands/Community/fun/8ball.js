const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Use an 8ball to decide.')
        .addStringOption(option => option.setName('question').setDescription('Your question for the 8ball').setRequired(true)),

    async execute(interaction) {

        const choice = ["It is certain.",
            "It is decidely so.",
            "Without a doubt.",
            "Yes, definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Yes",
            "Outlook is good.",
            "Signs point to yes",
            "Reply hazy, try again.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concetrate and ask again.",
            "Dont count on it.",
            "Outlook is not so good.",
            "My sources say no",
            "Very doubtful.",
            "No."
        ];
        const ball = Math.round(Math.random() * choice.length);

        await interaction.reply(choice[ball]).catch(err => { interaction.channel.send('Yes, No, Maybe So?') })
    },
}