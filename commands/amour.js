const { Discod, RichEmbed } = require("discord.js");
const { getMember } = require("../functions.js");
module.exports = class test {
    constructor(){
        this.name = 'amour',
        this.alias = ['t'],
        this.usage = '.amour'
    }

    run(client, message, args){
        let person = getMember(message, args[0]);

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** aime **${message.member.displayName}** à:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);

}}
