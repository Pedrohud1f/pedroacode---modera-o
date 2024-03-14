const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    name: "autorole_config",
    description: "Configuração de auto role.",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "autorole",
            description: "Cargo automático",
            type: Discord.ApplicationCommandOptionType.Role,
            required: true,
        }
    ],

    run: async (client, interaction) => {
        const autorole = interaction.options.getRole("autorole")

        await db.set(`cargo_autorole_${interaction.guild.id}`, autorole.id)

        let embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setTitle("Cargo configurado!")
            .setDescription(`> Cargo automático: ${autorole}.`)

        interaction.reply({ embeds: [embed], ephemeral: true })

    }
}