module.exports = class test {
    constructor(){
        this.name = 'prosit',
        this.alias = ['t'],
        this.usage = '.prosit'
    }

    run(client, message, args){
        if(args[1] == '114' || args[1] == '115' || args[1] == '116' || args[1] == '117' || args[1] == '118'){

            if(message.member.roles.find(r => r.name === args[1])) {
              message.channel.send(`La salle ${args[1]} est en prosit ('?finprosit [SALLE]' pour vous retirer le rôle)`);
             const role = message.guild.roles.find("name", `${args[1]}`);
             message.guild.roles.get(`${role.id}`).members.forEach(element => element.addRole('649241656696242177'));
            } else {
              message.channel.send("Arrête de mytho pd.");
            }}
  
            else {
              message.channel.send("Cette commande est réservée aux salles")
            }
    }
}