const {sfw} = require('./src/sfw.js')
const {nsfw} = require('./src/nsfw.js')
const img = require('./src/img.js')
const {Bienvenida} = require("./src/bienvenida/Bienvenida.js")
const {WelcomeZeew}= require("./src/bienvenida/WelcomeZeew.js")

console.log(` estamos en epocas de mantenimiento y actualizaciones , si algo no funciona como deberia, no te preocupes , se solucionara lo mas rapido posible.
 si el problema no se ha solucionado, reportadolo lo mas rapido posible.
 » Apoya A Zeew y obten beneficios unicos «
 • Soporte: discord.gg/PBDbHGq
 ♦ ¿ Tienes ideas para Zeew ? , entra al servidor y dinos.`);

module.exports = {
    Bienvenida,
    WelcomeZeew,
    sfw,
    nsfw,
    img
}