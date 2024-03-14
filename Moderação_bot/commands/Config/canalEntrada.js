const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()


module.exports = {
    name: "canalentrada_config",
    description: "Configuração do canal de boas vindas.",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "canalentrada",
            description: "Canal de boas vindas",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando`, ephemeral: true })
        } else {

        const canalentrada = interaction.options.getChannel("canalentrada")

        await db.set(`canal_entrada_${interaction.guild.id}`, canalentrada.id)

        let embed = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setTitle("Canal configurado!")
        .addFields({ name: `> Canal de boas vindas`, value: `${`canalentrada`}` })

        interaction.reply({ embeds: [embed], ephemeral: true })
        }
    }
}