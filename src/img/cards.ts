import { URLSearchParams } from "node:url";
import { ZeewError } from "../utils/ZeewError";
import { INT } from "../utils/key";
import { Bienvenida } from "./Bienvenida";

export class Card {
  token;
  bienvenida;

  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.bienvenida = Bienvenida;
  }

  async render(render: InstanceType<typeof Bienvenida>): Promise<Buffer> {
    try {
      if (!render) throw new ZeewError("Debes colocar el render");
      if (typeof render === "function")
        throw new ZeewError("Debes colocar el render");
      if (!render.estilo)
        throw new ZeewError("Esta propiedad hace render a la bienvenida");
      const jsonB = JSON.stringify(render),
        jsonP = JSON.parse(jsonB);

      const query = new URLSearchParams(jsonP);

      const body = await fetch(
        `${INT}/bw/${render.estilo}?${query.toString()}`,
        {
          headers: {
            token: render.token,
          },
        }
      ).then((res) => res.json());

      if (body.status == 404) throw new ZeewError(body.mensaje);

      return body;
    } catch (error) {
      throw new ZeewError(error.message);
    }
  }
}
