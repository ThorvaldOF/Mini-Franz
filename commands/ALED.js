module.exports = class test {
    constructor(){
        this.name = 'ALED',
        this.alias = ['t'],
        this.usage = '.ALED'
    }

    run(client, message, args){
    
        message.channel.send({embed: {
            color: 16777215,
            author: {
            name: client.user.username,
            icon_url: message.client.avatarURL
            },
            title: "Menu des commandes",
            fields: [{
                name: "👤",
                value: "Ce menu"
            },
            {
                name: "🔧",
                value: "Commandes utiles"
            },
            {
                name: "🍺",
                value: "Commandes inutiles"
            },
            ],
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: "© Mini-Franz"
            }
          }
          });
          message.channel.fetchMessages({limit: 1}).then(messages => {
            let lastMsg = messages.first();
            lastMsg.react('👤')
              .then(() => lastMsg.react('🔧'))
              .then(() => lastMsg.react('🍺'))
              .catch(() => console.error('Erreur emoji'));
      
              const filter = (reaction, user) => {
                return ['👤', '🔧', '🍺'].includes(reaction.emoji.name) && user.id === message.author.id;
              };
              
              call();
      
              function call(){
              lastMsg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
              .then(collected => {
                const reaction = collected.first();
                switch(reaction.emoji.name){
                  case '👤':
                    lastMsg.edit({embed: {
                        color: 65527,
                        author: {
                        name: client.user.username,
                        icon_url: message.client.avatarURL
                        },
                        title: "👤Menu des commandes👤",
                        fields: [{
                            name: "👤",
                            value: "Ce menu"
                        },
                        {
                            name: "🔧",
                            value: "Commandes utiles"
                        },
                        {
                            name: "🍺",
                            value: "Commandes inutiles"
                        },
                        ],
                        timestamp: new Date(),
                        footer: {
                        icon_url: client.user.avatarURL,
                        text: "© Mini-Franz"
                        }
                      }
                      })
                    call();
                    break;
                  case '🔧':
                      lastMsg.edit({embed: {
                        color: 16711680,
                        author: {
                        name: client.user.username,
                        icon_url: message.client.avatarURL
                        },
                        title: "🔧Commandes utiles🔧",
                        fields: [
                          {
                            name: "?ALED",
                            value: "Affiche les commandes"
                        },
                          {
                            name: "?info",
                            value: "Affiche les infos relatives au serveur"
                        },
                          {
                            name: "?BDE",
                            value: "Affiche les réseaux sociaux du BDE"
                        }, 
                          {
                            name: "?ping",
                            value: "Affiche votre ping"
                        },
                          {
                            name: "?nuke",
                            value: "Supprime des messages (max 100)\nLes messages vieux de plus de 14 jours ne peuvent pas être supprimés"
                        },
                          {
                            name: "?prosit [SALLE]",
                            value: "Ajoute le rôle 'En prosit' aux membres de votre salle"
                        },
                          {
                            name: "?finprosit [SALLE]",
                            value: "Retire le rôle 'En prosit' aux membres de votre salle"
                        },
                          {
                            name: "👤",
                            value: "Menu des commandes"
                        },
                        {
                            name: "🍺",
                            value: "Commandes inutiles"
                        },
                        ],
                        timestamp: new Date(),
                        footer: {
                        icon_url: client.user.avatarURL,
                        text: "© Mini-Franz"
                        }
                      }
                      });
                      call();
                    break;
                    case '🍺':
                      lastMsg.edit({embed: {
                        color: 65303,
                        author: {
                        name: client.user.username,
                        icon_url: message.client.avatarURL
                        },
                        title: "🍺Commandes inutiles🍺",
                        fields: [
                          {
                            name: "?sah\n?oh non\n?yohann\n?furry\n?pause\n?BTP\n?amour\n?fdp\n?pourcombien [max] [ton nombre]",
                            value: "---"
                        },
                          {
                            name: "👤",
                            value: "Menu des commandes"
                        },
                        {
                            name: "🔧",
                            value: "Commandes utiles"
                        },
                        ],
                        timestamp: new Date(),
                        footer: {
                        icon_url: client.user.avatarURL,
                        text: "© Mini-Franz"
                        }
                      }
                      });
                      call();
                    break;
                    
                  }}).catch(() => console.error('Temps écoulé'));
                }
          })


    }
}
