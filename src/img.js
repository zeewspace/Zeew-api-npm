const req = require("node-superfetch");
const { ZeewError } = require("../utils/ZeewError");
const { URI } = require("../utils/key");

class img {
  constructor(token) {
    if(!token) return ZeewError('Debes Colocar un Token') 
    this.token = token;
  }

  /**
   *
   * @param {*} image | Coloca la URL de una imagen
   */
  invert(image) {
    const { body } = req
    .get(`${URI}/img/invert`)
    .set("token", this.token)
    .query({
      avatar: image,
    });

    if (body.status === "404") throw new ZeewError(body.mensaje)
    return body;
  }

  /**
   *
   * @param {*} img URL de la imagen
   * @param {*} amplitud La cantidad de distorcion
   */
  distort(img, amplitud) {
    const { body } = req
      .get(`${URI}/img/distort`)
      .set("token", this.token)
      .query({ avatar: img, amplitud });

      if (body.status === "404") throw new ZeewError(body.mensaje)
    return body;
  }

  /**
   *
   * @param {*} img la URL de la imagen
   */
  blur(img) {
    const { body } = req
      .set("token", this.token)
      .get(`${URI}/img/blur`)
      .query({ avatar: img });

      if (body.status === "404") throw new ZeewError(body.mensaje)
    return body;
  }

  /**
   *
   * @param {String} imagen La URL de la imagen
   */
  sepia(imagen) {
    const { body } = req
      .get(`${URI}/img/sepia`)
      .set("token", this.token)
      .query({ avatar: imagen });

      if (body.status === "404") throw new ZeewError(body.mensaje)
    return body;
  }
}

module.exports = img;
