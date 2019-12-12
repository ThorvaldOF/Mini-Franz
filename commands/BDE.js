module.exports = class test {
    constructor(){
        this.name = 'BDE',
        this.alias = ['t'],
        this.usage = '.BDE'
    }

    run(client, message, args){
        message.channel.send({embed: {
            color: 3447003,
            description: "Voici la liste des réseaux du BDE:\n -Insta : @bdecesi.stras\n -Snap : bdecesi.stras\n -FB : @BDECESISTRAS\n -Discord: https://discord.gg/z7ZNz7v"
          }});
    }
}