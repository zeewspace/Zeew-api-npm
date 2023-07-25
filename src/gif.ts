import { ZeewError } from "./utils/ZeewError";
import { Sfw } from "./gifs/sfw";
import { Nsfw } from "./gifs/nsfw";

export class gif {
  token;
  sfw;
  nsfw;

  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.sfw = new Sfw(token);
    this.nsfw = new Nsfw(token);
  }
}
