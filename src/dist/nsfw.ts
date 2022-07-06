import req from "node-superfetch";
import { ZeewError } from "../utils/ZeewError";
import { INT } from "../utils/key";

/**
 * GIFs
 */
class sfw {
  /**
   * @param {string} token
   */
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes Colocar un Token");
    this.token = token;
    this.uri = INT + "/gif/nsfw";
  }

  token;
  uri;

  async maid() {
    let { body } = await req.get(this.uri + "/maid").set("token", this.token);
    // @ts-ignore
    if (body.status) throw new ZeewError(body.message);
    // @ts-ignore
    return body.url;
  }
  async boobs() {
    let { body } = await req.get(this.uri + "/boobs").set("token", this.token);
    // @ts-ignore
    if (body.status) throw new ZeewError(body.message);
    // @ts-ignore
    return body.url;
  }
  async furry() {
    let { body } = await req.get(this.uri + "/furry").set("token", this.token);
    // @ts-ignore
    if (body.status) throw new ZeewError(body.message);
    // @ts-ignore
    return body.url;
  }
}

export default sfw;
