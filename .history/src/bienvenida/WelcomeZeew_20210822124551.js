const { ZeewError } = require("../../utils/ZeewError");
const request = require("node-superfetch");
const { URI } = require("../../utils/key");

const WelcomeZeew = async (card) => {
  if (!card) throw new ZeewError('Debes colocor la tarjeta');
  if (!card || typeof card !== "object") throw new ZeewError('Debes colocar el contructor de la tarjeta');
  if (!card.avatar) throw new ZeewError("Es requerido colocar un avatar");
  if (typeof card.avatar === "function") throw new ZeewError("Debes colocar el avatar");
  if (typeof card.token === "function") throw new ZeewError("Debes colocar el token, es necesario");
  const jsonB = JSON.stringify(card)
  const jsonP = JSON.parse(jsonB)

  const values = {
    avatar: jsonP.avatar,
    tit: jsonP.title,
    desc: jsonP.Desc,
    colordesc: jsonP.cdesc,
    colortit: jsonP.ctit,
    fondo: jsonP.fondo,
    estilo: jsonP.estilo,
    colorCircle: jsonP.coloc,
    // font: typeof card.font === "function" ? card.font() : ""
  }

  const { body } = await request
  .get(`${URI}/api/bw/${values.estilo}`)
  .set("token", card.token)
  .query(values);

  if (body.status == "404") throw new ZeewError(body.mensaje);

  return body;
}

module.exports = { WelcomeZeew };
