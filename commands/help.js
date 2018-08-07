const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor('RANDOM')
  .addField("8ball", " >8ball [question]")
  .addField("botinfo", " >botinfo")
  .addField("cat", " >cat")
  .addField("credits", " >credits")
  .addField("dog", " >dog")
  .addField("help", " >help")
  .addField("level", " >level")
  .addField("pay", " >pay [@user]")
  .addField("report", " >report [@user]")
  .addField("say", " >say [message here]")
  .addField("serverinfo", " >serverinfo")
  .addField("meme", " >meme")
  .addField("Links", " >links")
  .addField("userinfo", " >userinfo [@user]")

  message.member.send(helpembed);

  let Funembed = new Discord.RichEmbed()
  .setDescription("Fun Menu")
  .setColor('RANDOM')
  .addField("rps", " >rps")
  .addField("rolldice", " >rolldice")
  .addField("joke", " >joke")
  .addField("hastebin", " >hastebin")
  .addField("ascii", " >ascii")
  
  message.member.send(Funembed);

  let Moneyembed = new Discord.RichEmbed()
  .setDescription("Money Menu")
  .setColor('RANDOM')
  .addField("pay", " >pay")
  .addField("coins", " >coins")

  message.member.send(Moneyembed);

  if(message.member.hasPermission("ADMINISTRATOR")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor('RANDOM')
  .addField("addrole", " >addrole [@user]")
  .addField("removerole", " >removerole [@user]")
  .addField("kick", " >kick [@user]")
  .addField("warn", " >warn [@user]")
  .addField("tempmute", " >tempmute [@user] [duration] [reason]")
  .addField("ban", " >ban [@user] [reason]")
  .addField("prefix", " >prefix [new prefix here]")
  .addField("mute", " >mute")
  .addField("vote", " >vote")
  .addField("votekick", " >votekick")
  .addField("unmute", " >unmute")

  try{
    await message.author.send(modembed);
    message.react("😉")
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod cmds.")
  }
}

}

module.exports.help = {
  name: "help"
}