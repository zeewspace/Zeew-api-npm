import { ZeewError } from "../utils/ZeewError";

import cards from "./cards";
import filter from "./filter";

class img {
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.card = new cards(token);
    this.filter = new filter(token);
  }

  token;
  card;
  filter;
}

export default img;
