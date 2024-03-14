const fs = require("fs");

module.exports = async (client) => {
    const SlashsArray = []

    fs.readdir(`./commands`, (error, folder) => {
        folder.forEach(subfolder => {
            fs.readdir(`./commands/${subfolder}/`, (error, files) => {
                files.forEach(files => {
                    if (!files?.endsWith('.js')) return;
                    files = require(`../commands/${subfolder}/${files}`);
                    if (!files?.name) return;
                    client.slashCommands.set(files?.name, files);

                    SlashsArray.push(files)
                })
            })
        })
    })

    fs.readdir(`./events/`, (erro, pasta) => {
        pasta.forEach(subpasta => {
            fs.readdir(`./events/${subpasta}/`, (erro, arquivos) => {
                arquivos.forEach(arquivo => {
                    if (!arquivo.endsWith('.js')) return; require(`../events/${subpasta}/${arquivo}`);
                });
            });
        });
    });
    client.on("ready", async () => {
        client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
    });
}