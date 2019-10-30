const req = require("node-superfetch")
const {
  ZeewError
} = require("../utils/ZeewError")

class sfw {

  /**
   * @param {string} token 
   */
  constructor(token) {
    this.token = token;
  }

  async neko() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/neko').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async punch() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/punch').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async slap() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/slap').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async suicide() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/suicide').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async kill() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/kill').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async kiss() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/kiss').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async wasted() {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/wasted').set("token", this.token)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }

  /*
    tipos:
  */

  async hug(tp) {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/hug').set("token", this.token)
      .query({
        type: tp
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async cry(tp) {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/cry').set("token", this.token)
      .query({
        type: tp
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async cookie(tc) {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/cookie').set("token", this.token)
      .query({
        type: tc
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }
  async dance(tp) {
    let {
      body
    } = await req.get('https://zw-api.herokuapp.com/api/gif/cookie').set("token", this.token)
      .query({
        type: tp
      })
    if (body.status == "404") throw new ZeewError(body.mensaje)
    if (body.msg) throw new ZeewError(body.msg)
    return body.url
  }

}


module.exports = {sfw}
