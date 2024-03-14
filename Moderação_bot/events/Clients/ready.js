const Discord = require('discord.js')
const client = require("../../index");
const { joinVoiceChannel } = require('@discordjs/voice'); // npm i @discordjs/voice

client.on('ready', () => {
    console.log(`🔥 Estou online em: ${client.user.username}!`)
})

    // let canal = client.channels.cache.get("1215148096703696926")
    // if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
    // if (canal.type !== Discord.ChannelType.GuildVoice) return console.log("❌ Não foi possível entrar no canal de voz.")

    // try {
    //     joinVoiceChannel({
    //         channelId: canal.id,
    //         guildId: canal.guild.id,
    //         adapterCreator: canal.guild.voiceAdapterCreator,
    //     })
    //     console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)
    // } catch (e) {
    //     console.log("❌ Não foi possível entrar no canal de voz.")
    // }