const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const client = new Discord.Client({
    intents: [1, 512, 32768, 2, 128,
        Discord.GatewayIntentBits.Guilds,
        Discord.IntentsBitField.Flags.AutoModerationConfiguration,
        Discord.IntentsBitField.Flags.AutoModerationExecution,
        Discord.IntentsBitField.Flags.DirectMessageReactions,
        Discord.IntentsBitField.Flags.DirectMessageTyping,
        Discord.IntentsBitField.Flags.DirectMessages,
        Discord.IntentsBitField.Flags.GuildEmojisAndStickers,
        Discord.IntentsBitField.Flags.GuildIntegrations,
        Discord.IntentsBitField.Flags.GuildInvites,
        Discord.IntentsBitField.Flags.GuildMembers,
        Discord.IntentsBitField.Flags.GuildMessageReactions,
        Discord.IntentsBitField.Flags.GuildMessageTyping,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.GuildModeration,
        Discord.IntentsBitField.Flags.GuildPresences,
        Discord.IntentsBitField.Flags.GuildScheduledEvents,
        Discord.IntentsBitField.Flags.GuildVoiceStates,
        Discord.IntentsBitField.Flags.GuildWebhooks,
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.MessageContent
    ],
    partials: [
        Discord.Partials.User,
        Discord.Partials.Message,
        Discord.Partials.Reaction,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember
    ]
});

module.exports = client

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)