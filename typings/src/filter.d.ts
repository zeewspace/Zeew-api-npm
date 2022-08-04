/// <reference types="node" />
declare class Filter {
  constructor(token: string);
  token: string;
  uri: string;
  /**
   * @param {img} img URL de una imagen
   * @returns {img} <Buffer>
   */
  triggered(img: any): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  sepia(img: any): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  invertir(img: any): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  gris(img: any): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {pixels} pixels Cantidad de desenfoque
   * @returns {img} <Buffer>
   */
  desenfoque(img: any, pixel?: string): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {size} size Tamaño del pixel
   * @returns {img} <Buffer>
   */
  pixel(img: any, pixel?: string): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  gay(img: any): Promise<string | object | Buffer>;
  /**
   *
   * @param {img} img URL | URL de una imagen
   * @returns {img} <Buffer>
   */
  circulo(img: any): Promise<string | object | Buffer>;
  shipeo(img1: any, img2: any, ship: any): Promise<string | object | Buffer>;
}
export default Filter;
