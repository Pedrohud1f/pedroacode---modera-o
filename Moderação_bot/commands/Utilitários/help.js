const Discord = require("discord.js"); // discord

module.exports = {
    name: "help",
    description: "Veja meus comandos!",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let embed_painel = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Olá ${interaction.user}, veja meus comandos interagindo com o painel abaixo:`)

        let embed_utilidade = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Olá ${interaction.user}, veja meus comandos de **utilidade** abaixo:`)
        .addFields({ name: "/ping", value: "Veja o ping do bot." })
        .addFields({ name: "/help", value: "Veja meus comandos." })

        let embed_config = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Olá ${interaction.user}, veja meus comandos de **configuração** abaixo:`)
        .addFields({ name: "/autorole_config", value: "Configure seu cargo automático." })

        let embed_adm = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Olá ${interaction.user}, veja meus comandos de **administração** abaixo:`)
        .addFields({ name: "/lock", value: "Bloqueie algum canal de texto." })
        .addFields({ name: "/unlock", value: "Desbloqueie algum canal de texto." })
        .addFields({ name: "/verificação", value: "Ative o sistema de verificação." })

        let painel = new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
            .setCustomId("painel_help")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "Painel Inicial",
                    //description: "",
                    emoji: "📖",
                    value: "painel"
                },
                {
                    label: "Utilidade",
                    description: "Veja meus comandos de utilidade.",
                    emoji: "✨",
                    value: "utilidade"
                },
                {
                    label: "Configuração",
                    description: "Veja meus comandos de configuração.",
                    emoji: "⚙️",
                    value: "config"
                },
                {
                    label: "Administração",
                    description: "Veja meus comandos de administração.",
                    emoji: "🔨",
                    value: "adm"
                }
            )
        )

        interaction.reply({ embeds: [embed_painel], components: [painel], ephemeral: true }).then(() => {
            interaction.channel.createMessageComponentCollector().on("collect", (c) => {
                let valor = c.values[0]

                if (valor === "painel") {
                    c.deferUpdate()
                    interaction.editReply({ embeds: [embed_painel] })
                } else if (valor === "utilidade") {
                    c.deferUpdate()
                    interaction.editReply({ embeds: [embed_utilidade] })
                } else if (valor === "config") {
                    c.deferUpdate()
                    interaction.editReply({ embeds: [embed_config] })
                } else if (valor === "adm") {
                    c.deferUpdate()
                    interaction.editReply({ embeds: [embed_adm] })
                }
            })
        })

    }
}