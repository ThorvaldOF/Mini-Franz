module.exports = class test {
    constructor(){
        this.name = 'ping',
        this.alias = ['t'],
        this.usage = '.ping'
    }

    run(client, message, args){
        message.channel.send("Attends...")
        .then((msg) => {
          msg.edit("Ping: " + (Date.now() - msg.createdTimestamp))
        });
    }
}