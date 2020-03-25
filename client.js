const Zeew = require('../zeew');


const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log("Iniciado");
});

Client.on('message', async (message) => {

    if(message.content == "join"){
        let wel = new Zeew.Bienvenida()
        .avatar(message.author.displayAvatarURL)
        .fondo("https://i.imgur.com/0YrfJgx.jpg")
        .colorTit("")
        .estilo("classic")
        .titulo(`Bienvenido  al servidor ${message.author.username}`)
        .colorDesc("")
        .descripcion("Disfruta tu estadia en el servidor")
        
      let img = await Zeew.WelcomeZeew(wel)
       
      member.guild.channels.get("Id del canal").send({files: [img]})
    };

});

Client.login("NTkxMzUzNjAwNjI2OTE3NDE2.XnuaVw.vGa4Bvz12-L_ziKvVf5XuQyzMq8");