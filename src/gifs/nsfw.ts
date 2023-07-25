import { ZeewError } from "../utils/ZeewError";
import { INT } from "../utils/key";

/**
 * GIFs
 */
export class Nsfw {
  token;
  uri;

  /**
   * @param {string} token
   */
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes Colocar un Token");
    this.token = token;
    this.uri = INT + "/gif/nsfw";
  }

  async maid(): Promise<string> {
    const { status, url, message } = await fetch(this.uri + "/main", {
      headers: {
        token: this.token,
      },
    }).then((res) => res.json());

    if (status) throw new ZeewError(message);
    return url;
  }

  async boobs(): Promise<string> {
    const { status, url, message } = await fetch(this.uri + "/boobs", {
      headers: {
        token: this.token,
      },
    }).then((res) => res.json());

    if (status) throw new ZeewError(message);
    return url;
  }

  async furry(): Promise<string> {
    const { status, url, message } = await fetch(this.uri + "/furry", {
      headers: {
        token: this.token,
      },
    }).then((res) => res.json());

    if (status) throw new ZeewError(message);
    return url;
  }
}
