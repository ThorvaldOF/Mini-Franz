module.exports = class test {
    constructor(){
        this.name = 'non',
        this.alias = ['t'],
        this.usage = '.non'
    }

    run(client, message, args){
        message.delete()
        .then(() => message.channel.send({files: ["https://images-ext-1.discordapp.net/external/ZcfA6eaQOXTXoiIzWR_R1unUX672JKgTCxLQ_JgKYlI/%3Fwidth%3D377%26height%3D552/https/media.discordapp.net/attachments/229858885786271744/511487461575360512/oh_non.png"]}));
    }
}