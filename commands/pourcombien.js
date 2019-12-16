module.exports = class test {
    constructor(){
        this.name = 'pourcombien',
        this.alias = ['t'],
        this.usage = '.pourcombien'
    }

    run(client, message, args){
        let nombre = Math.floor(Math.random() * (args[1] - 1 + 1) + 1);
        let choisi = args[2];
        if(choisi == 0){
            message.channel.send("Arrêtes de tricher FDP, on avait dit pas de zéro")
        } else {
                if(choisi >= args[1]){
                    if(nombre == choisi){
                    message.channel.send(`J'ai choisi ${nombre}, TOZ`)
                    } else {
                    message.channel.send(`J'ai choisi ${nombre}, tu as gagné`)
                    }
                } else {
                message.channel.send(`T'es vraiment une grosse merde mdrr`)
                }
    }
}}
