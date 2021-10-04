const req = require("node-superfetch");
const { ZeewError } = require("../utils/ZeewError");
const { INT } = require("../utils/key");

/**
 * GIFs
 */
class sfw {
  /**
   * @param {string} token
   */
  constructor(token) {
    if (!token) throw new ZeewError("Debes Colocar un Token");
    this.token = token;
    this.uri = INT + "/gif/nsfw";
  }

  async maid() {
    let { body } = await req.get(this.uri + "/maid").set("token", this.token);
    if (body.msg) throw new ZeewError(body.msg);
    return body.url;
  }
}

module.exports = sfw
