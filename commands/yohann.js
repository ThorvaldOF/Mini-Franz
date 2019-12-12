module.exports = class test {
    constructor(){
        this.name = 'yohann',
        this.alias = ['t'],
        this.usage = '.yohann'
    }

    run(client, message, args){
        message.channel.send('<@282284441567756299> Soirée ce soir, tu viens?')
        .then(() => message.channel.send({files: ["https://cdn.discordapp.com/attachments/619093726064672769/624528078110195715/3079157155_1_3_LMLGeWoO.jpg"]}));
    }
}