import { ZeewError } from "../utils/ZeewError";
import { INT } from "../utils/key";
import request from "node-superfetch";
import Bienvenida from "./Bienvenida";

class card {
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
  }

  token;
  bienvenida = Bienvenida;
  async render(render: any) {
    try {
      if (!render) throw new ZeewError("Debes colocar el render");
      if (typeof render === "function")
        throw new ZeewError("Debes colocar el render");
      if (!render.estilo)
        throw new ZeewError("Esta propiedad hace render a la bienvenida");
      const jsonB = JSON.stringify(render);
      const jsonP = JSON.parse(jsonB);

      const { body } = await request
        .get(`${INT}/bw/${jsonP.estilo}`)
        .set("token", render.token)
        .query(jsonP);

      // @ts-ignore
      if (body.status == 404) throw new ZeewError(body.mensaje);

      return body;
    } catch (error) {
      console.log(error);
      // @ts-ignore
      console.log(`Zeew.API-Error: ${error.message}`);
    }
  }
}

export default card;
