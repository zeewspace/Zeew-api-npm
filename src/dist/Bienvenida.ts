class Bienvenida {
  constructor(datos = {}) {
    let keys = Object.keys(datos);
    if (keys.length > 0) {
      // @ts-ignore
      for (var i in keys) this[keys[i]] = datos[keys[i]];
    }
  }
  token(token: any) {
    this.token = token;
    return this;
  }
  titulo(tit: any) {
    this.tit = tit;
    return this;
  }
  tit: any;
  colorTit(ctit: any) {
    this.colortit = ctit;
    return this;
  }
  colortit: any;
  colorDesc(cdesc: any) {
    this.colordesc = cdesc;

    return this;
  }
  colordesc: any;
  descripcion(desc: any) {
    this.desc = desc;

    return this;
  }
  desc: any;
  avatar(avatar: any) {
    this.avatar = avatar;
    return this;
  }
  fondo(fondo: any) {
    this.fondo = fondo;
    return this;
  }
  estilo(estilo: any) {
    this.estilo = estilo;
    return this;
  }
  colorCirculo(colorC: any) {
    this.colorCircle = colorC;
    return this;
  }
  colorCircle: any;
  font(font: any) {
    this.font = font;
    return this;
  }
}

export default Bienvenida;
