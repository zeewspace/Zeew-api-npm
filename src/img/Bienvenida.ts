export class Bienvenida {
  token: string;
  tit: string;
  colortit: string;
  colordesc: string;
  desc: string;
  avatar: string;
  fondo: string;
  estilo: string;
  colorCircle: string;
  font: string;

  Token(token: string) {
    this.token = token;
    return this;
  }

  Titulo(tit: string) {
    this.tit = tit;
    return this;
  }

  ColorTit(ctit: string) {
    this.colortit = ctit;
    return this;
  }

  ColorDesc(cdesc: string) {
    this.colordesc = cdesc;

    return this;
  }

  Descripcion(desc: string) {
    this.desc = desc;

    return this;
  }

  Avatar(avatar: string) {
    this.avatar = avatar;
    return this;
  }

  Fondo(fondo: string) {
    this.fondo = fondo;
    return this;
  }

  Estilo(estilo: string) {
    this.estilo = estilo;
    return this;
  }

  ColorCirculo(colorC: string) {
    this.colorCircle = colorC;
    return this;
  }

  Font(font: string) {
    this.font = font;
    return this;
  }
}
