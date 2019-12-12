module.exports = class test {
    constructor(){
        this.name = 'BTP',
        this.alias = ['t'],
        this.usage = '.BTP'
    }

    run(client, message, args){
        message.channel.send("On parle de BTP ici?")
        .then(() => message.channel.send({files: ["https://i.pinimg.com/originals/3e/76/89/3e76897119317f156d32a9ca1d87fac2.jpg"]}));
    }
}