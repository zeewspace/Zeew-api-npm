import { ZeewError } from "../utils/ZeewError";

import sfw from "./sfw";
import nsfw from "./nsfw";

class gif {
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.sfw = new sfw(token);
    this.nsfw = new nsfw(token)
  }

  token;
  sfw;
  nsfw;
}

export default gif;
