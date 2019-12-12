module.exports = class test {
    constructor(){
        this.name = 'info',
        this.alias = ['t'],
        this.usage = '.info'
    }

    run(client, message, args){
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " jour" : " jours") + " avant";
        };
            const infoEmbed = {
              color: 0x0099ff,
              author: {
                name: `${message.guild.name}`,
                icon_url: message.guild.iconURL,
              },
              thumbnail: {
                url: message.guild.iconURL,
              },
              fields: [
                {
                  name: "Membres | Humains | BOT",
                  value: `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`,
                  inline: true,
                },
                
                {
                  name: "Fondateur",
                  value: `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
                  inline: true,
                },
                
                {
                  name: "ID du serveur",
                  value: `${message.guild.id}`,
                  inline: true,
                },
                
              
                {
                  name: "Salons",
                  value: `${message.guild.channels.size}`,
                  inline: true,
                },
                {
                  name: "Roles",
                  value: `${message.guild.roles.size}`,
                  inline: true,
                },
                {
                  name: "Date de création",
                  value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`,
                  inline: true,
                },
                
              ],
              
              
              timestamp: new Date(),
              footer: {
                text: `© Mini-Franz`,
                icon_url: client.user.avatarURL,
              },
            };
            message.channel.send(infoEmbed)
    }
}