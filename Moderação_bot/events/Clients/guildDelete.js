// const Discord = require("discord.js");
// const client = require("../../index");

// client.on("guildDelete", async guild => {
//     const canal = await client.channels.cache.get("1215148096137330743") // id do canal de log's de adição
//     const nome = guild.name
//     const membros = guild.memberCount
//     const donoID = guild.ownerId
//     const dono = await client.users.cache.get(donoID)
//     const donoNome = dono.username

//     const embed = new Discord.EmbedBuilder()
//     .setColor("Blue")
//     .setTitle(` Me removeram de um servidor!`)
//     .addFields({ name: 'Nome do servidor', value: `> ${nome}` })
//     .addFields({ name: 'Membros do servidor', value: `> ${membros}` })
//     .addFields({ name: 'Dono do servidor', value: `> ${donoNome} / ${donoID}` })
//     .addFields({ name: 'Idade do servidor', value: `> <t:${parseInt(guild.createdTimestamp / 1000)}:R>` })
//     .setTimestamp()
//     .setFooter({ text: 'Removido de um server' })

//     await canal.send({ embeds: [embed] })

// })