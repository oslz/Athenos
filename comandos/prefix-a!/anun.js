exports.run = (client, message, args) => {

    message.delete();
    message.channel.sendMessage("<@&399759520089374720> :arrow_down: :arrow_down: <@&399759520089374720>");
    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ANUNCIO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nSistema de loteria foi criado no servidor, informações em <#410084948930854912>. :wink:",
          "url": "https://discordapp.com",
          "color": 55512,
          "thumbnail": {
            "url": "https://i.imgur.com/4JaNmFp.png"
          }
        }
      });
    
    }