const req = require("node-superfetch")

const {ZeewError} = require("../utils/ZeewError")

async function invert(imagen) {
let { body } = await req.get(`https://zeew-test.glitch.me/api/img/invert`).query({
  avatar: imagen
})
  if(body.status === "404") return ZeewError(body.mensaje)

return body
}
async function distort(imagen, amplitud) { 
let { body } = await req.get(`https://zeew-test.glitch.me/api/img/distort`)
.query({
  avatar: imagen,
  amplitud: amplitud
})
  if(body.status === "404") return ZeewError(body.mensaje)

return body
}

async function blur(imagen) { 
let { body } = await req.get(`https://zeew-test.glitch.me/api/img/blur`)
.query({
  avatar: imagen
})
 if(body.status === "404") return ZeewError(body.mensaje)

return body
}
async function sepia(imagen) {
let { body } = await req.get(`https://zeew-test.glitch.me/api/img/sepia`)
.query({
  avatar: imagen
})
if(body.status === "404") return ZeewError(body.mensaje)

return body
}
module.exports = {
  invert,
  blur,
  sepia,
  distort
  
}