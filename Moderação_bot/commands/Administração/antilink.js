const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: 'antilink',
  description: 'Ative ou desative o sistema antilink do servidor.',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

      if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando!`, ephemeral: true })
    } else {
      let embed_g = new Discord.EmbedBuilder()
        .setColor('Random')
        .setDescription(`Olá ${interaction.user}, o sistema de antilink foi \`ativado\`.`)

      let embed_r = new Discord.EmbedBuilder()
        .setColor('Random')
        .setDescription(`Olá ${interaction.user}, o sistema de antilink foi \`destivado\`.`)

      let confirm = await db.get(`antilink_${interaction.guild.id}`)

      if (confirm === null || confirm === false) {
          interaction.reply({ embeds: [embed_g] })
          await db.set(`antilink_${interaction.guild.id}`, true)
      } else if (confirm === true) {
          interaction.reply({ embeds: [embed_r] })
          await db.set(`antilink_${interaction.guild.id}`, false)
      }
    }
  } 
}