class Bienvenida {

    constructor(datos = {}) {
        let keys = Object.keys(datos)
        if (keys.length > 0) {
            for (var i in keys) this[keys[i]] = datos[keys[i]]
        }
    }
    token(token) {
        this.token = token
        return this;
    }
    titulo(title) {
        this.title = title;
        return this;
    }
    colorTit(ctit) {
        this.ctit = ctit
        return this
    }
    colorDesc(cdesc) {
        this.cdesc = cdesc

        return this;
    }
    descripcion(Desc) {
        this.Desc = Desc

        return this;
    }
    avatar(avatar) {
        this.avatar = avatar;
        return this;
    }
    fondo(fondo) {
        this.fondo = fondo;
        return this;
    }
    estilo(estilo) {
        this.estilo = estilo;
        return this;
    }
    colorCirculo(colorC) {
        this.coloc = colorC;
        return this; 
    }
    font(font) {
        this.font = font;
        return this;
    }
}
module.exports = {Bienvenida};
