const req = require("node-superfetch")

class nsfw {

    /**
     * @param {string} Coloca un Token especial para usar NSFW
     */

    constructor(token) {
        this.token = token
    }

    /**
     * @param {string}
     */
    async  fuck() {
        let { body } = await req.get(`https://zeew-test.glitch.me/api/gif/fuck`).set("token", this.token)
        return body.url
    }
    async  porn() {
        let { body } = await req.get(`https://zeew-test.glitch.me/api/gif/porn`).set("token", this.token)
        return body.url
    }
}

module.exports = { nsfw };