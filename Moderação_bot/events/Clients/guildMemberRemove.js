const Discord = require("discord.js");
const client = require("../../index");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on("guildMemberRemove", async (member) => {
  let canal_logs = await db.get(`canal_saida_${member.guild.id}`)
    if (!canal_logs) return

    let embed = new Discord.EmbedBuilder()
    .setColor("Blue")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`__**${member} Deixou a comunidade**__\n\n> Espero que um dia volte!`)
    .setTimestamp()

    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` })
})