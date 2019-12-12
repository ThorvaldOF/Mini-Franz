module.exports = class test {
    constructor(){
        this.name = 'furry',
        this.alias = ['t'],
        this.usage = '.furry'
    }

    run(client, message, args){
        message.channel.send("Rejoins nous dans le monde magique des furry")
        .then(() => message.channel.send({files: ["https://stayhipp.com/wp-content/uploads/2018/11/anthrocon.jpg"]}));     
    }
}