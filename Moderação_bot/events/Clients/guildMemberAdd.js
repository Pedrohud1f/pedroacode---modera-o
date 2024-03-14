const Discord = require("discord.js");
const client = require("../../index");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on("guildMemberAdd", async (member) => {
    let cargo_autorole = await db.get(`cargo_autorole_${member.guild.id}`)
    if (!cargo_autorole) return console.log("❌ O autorole não está configurado!")

    member.roles.add(cargo_autorole).catch(err => {
        console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
    })
})

client.on("guildMemberAdd", async (member) => {
    let canal_logs = await db.get(`canal_entrada_${member.guild.id}`)
    if (!canal_logs) return

    let embed = new Discord.EmbedBuilder()
    .setColor("Blue")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`__**BEM VINDO(A) ${member}**__\n\n> Olá ${member}\n> Bem vindo ao PedroaCode, temos nossos cursos, temos interação com os próprios membros! Espero que se divirta! `)
    .setTimestamp()

    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `||${member}||` })
})