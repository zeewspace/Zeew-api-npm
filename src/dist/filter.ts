import req from "node-superfetch";
import { ZeewError } from "../utils/ZeewError";
import { INT } from "../utils/key";

class Filter {
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.uri = INT + "/img";
  }

  token;
  uri;

  /**
   * @param {img} img URL de una imagen
   * @returns {img} <Buffer>
   */
  async triggered(img: any) {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/triggered")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async sepia(img: any) {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/sepia")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async invertir(img: any) {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/invertir")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async gris(img: any) {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/gris")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {pixels} pixels Cantidad de desenfoque
   * @returns {img} <Buffer>
   */
  async desenfoque(img: any, pixel = "5") {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/desenfoque")
      .set("token", this.token)
      .query({
        avatar: img,
        pixel,
      });
    // @ts-ignored
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {size} size Tamaño del pixel
   * @returns {img} <Buffer>
   */
  async pixel(img: any, pixel = "10") {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/pixel")
      .set("token", this.token)
      .query({
        avatar: img,
        pixel,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async gay(img: any) {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/gay")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URL de una imagen
   * @returns {img} <Buffer>
   */
  async circulo(img: any) {
    if (!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/circulo")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  async shipeo(img1: any, img2: any, ship: any) {
    if (!img1) throw new ZeewError("Debes colocar una imagen");
    if (!img2) throw new ZeewError("Debes colocar una imagen");
    if (!ship) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/shipeo")
      .set("token", this.token)
      .query({
        avatar: img1,
        avatar2: img2,
        ship: ship,
      });
    // @ts-ignore
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
}

export default Filter;
