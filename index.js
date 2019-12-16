const { Client, Attachment, Discord, Guild } = require("discord.js");
const client = new Client();
const { CommandHandler} = require('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ["?"]
});

const activities_list = [
    "Boire un café", 
    "Prendre une pause",
    "Finir son CER", 
    "Se mettre une race",
    "Se coder lui-même",
    "Passer au Auchan",
    "Faire un prosit",
    "Faire des memes de Abbas",
  ];

  client.on("ready", () => {
    console.log(`${client.user.username} est en ligne!`);
  
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
      client.user.setActivity(activities_list[index]);
  }, 100000);
  });

client.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    
    if(!cmd) return;

    try{
        cmd.run(client, message, args);
    } catch(e){
        console.log(e)
    }
})

client.login(process.env.TOKEN)
