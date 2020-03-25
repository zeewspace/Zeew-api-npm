const { ZeewError } = require("../../utils/ZeewError.js")
const request = require('node-superfetch');

async function WelcomeZeew(bienvenida){
  
    if(!bienvenida || typeof bienvenida !== "object") throw new ZeewError("Usa el constructor de la bienvenida!")
    if(!bienvenida.avatar) throw new ZeewError("Es requerido un url valida de avatar")
    const fondo = bienvenida.fondo;
    const avatar = bienvenida.avatar;
    const txTit = bienvenida.title;
    const colorTitulo = bienvenida.ctit
    const colorDesc = bienvenida.cdesc 
    const txDesc = bienvenida.Desc
    const estilo = bienvenida.estilo
    const token = bienvenida.token
 

    const { body } = await request.get("http://localhost:3000/api/img/bienvenida").set("token", token)
    .query({
      estilo: estilo,
      fondo: fondo,
      colortit: colorTitulo.replace('#', ''),
      colordesc: colorDesc.replace('#', ''),
      avatar: avatar,
      desc: txDesc,
      tit: txTit
    })
    if (body.status == "404") throw new ZeewError(body.mensaje)
     
  return body
  }
module.exports = {WelcomeZeew};