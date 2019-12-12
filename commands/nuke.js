module.exports = class test {
    constructor(){
        this.name = 'nuke',
        this.alias = ['t'],
        this.usage = '.nuke'
    }

    run(client, message, args){
        if (!message.member.roles.find("name", "Modo")) { 
            message.channel.send('Tu dois être modo pour utiliser la nuke'); 
            return; 
        }
        if (args[1] < 101){
            message.channel.bulkDelete(`${args[1]}`)
            .then(() => message.channel.send({files: ["https://cdn.discordapp.com/attachments/571433843366690816/629619860149895178/tenor.gif"]}));
            
        } else {
            message.channel.send("La limite est fixée à 100 messages")
        }


    }
}