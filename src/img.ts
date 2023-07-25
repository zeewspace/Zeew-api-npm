import { ZeewError } from "./utils/ZeewError";
import { Card } from "./img/cards";
import { Filter } from "./img/filter";

export class img {
  token;
  card;
  filter;

  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.card = new Card(token);
    this.filter = new Filter(token);
  }
}
