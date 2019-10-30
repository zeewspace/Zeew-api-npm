const req = require("node-superfetch")

async function fuck() {
let { body } = await req.get(`https://zeew-test.glitch.me/api/gif/fuck`)
return body.url
}
async function porn() {
let { body } = await req.get(`https://zeew-test.glitch.me/api/gif/porn`)
return body.url
}