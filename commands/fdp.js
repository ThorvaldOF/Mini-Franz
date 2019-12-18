const { Discod, RichEmbed } = require("discord.js");
const { getMember } = require("../functions.js");
module.exports = class test {
    constructor(){
        this.name = 'fdp',
        this.alias = ['t'],
        this.usage = '.fdp'
    }

    run(client, message, args){
        let person = getMember(message, args[0]);

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "🖕".repeat(loveIndex) + "💩".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#000000")
            .addField(`👽 **${person.displayName}** a un niveau de filsdeputerie de:`,
            `💀 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);

}}