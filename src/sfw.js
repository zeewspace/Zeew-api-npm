const req = require("node-superfetch")
const {
  ZeewError
} = require("../utils/ZeewError")
const {GIF} = require('../utils/key');

/**
 * GIFs
 */
class sfw {

  /**
   * @param {string} token 
   */
  constructor(token) {
    if(!token) throw new ZeewError('Debes Colocar un Token')
    this.token = token;
  }

  async neko() {
    let {
      body
    } = await req.get(GIF + '/gif/neko').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async punch() {
    let {
      body
    } = await req.get(GIF + '/gif/punch').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async slap() {
    let {
      body
    } = await req.get(GIF + '/gif/slap').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async kill() {
    let {
      body
    } = await req.get(GIF + '/gif/kill').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async kiss() {
    let {
      body
    } = await req.get(GIF + '/gif/kiss').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }

  /*
    tipos:
  */

  /**
   * 
   * @param {string} Abrazos  anime o humanos 
   */
  async hug(tp) {
    let {
      body
    } = await req.get(GIF + '/gif/hug').set("token", this.token)
      .query({
        type: tp
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
   /**
   * 
   * @param {string} Llorar  anime o humanos 
   */
  async cry(tp) {
    let {
      body
    } = await req.get(GIF + '/gif/cry').set("token", this.token)
      .query({
        type: tp
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
   /**
   * 
   * @param {string} Galletas  anime o humanos 
   */
  async cookie(tc) {
    let {
      body
    } = await req.get(GIF + '/gif/cookie').set("token", this.token)
      .query({
        type: tc
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
   /**
   * 
   * @param {string} Bailar  anime o humanos 
   */
  async dance(tp) {
    let {
      body
    } = await req.get(GIF + '/gif/dance').set("token", this.token)
      .query({
        type: tp
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }

}


module.exports = { sfw }
