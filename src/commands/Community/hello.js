const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies with a hello when used'),

    // Reply is sent PRIVATELY to the user in the channel.
    async execute(interaction, client) {
        await interaction.reply({ content: 'Hello! ', ephemeral: true })
    },
}