"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bienvenida = /** @class */ (function () {
    function Bienvenida(datos) {
        if (datos === void 0) { datos = {}; }
        var keys = Object.keys(datos);
        if (keys.length > 0) {
            // @ts-ignore
            for (var i in keys)
                this[keys[i]] = datos[keys[i]];
        }
    }
    Bienvenida.prototype.token = function (token) {
        this.token = token;
        return this;
    };
    Bienvenida.prototype.titulo = function (tit) {
        this.tit = tit;
        return this;
    };
    Bienvenida.prototype.colorTit = function (ctit) {
        this.colortit = ctit;
        return this;
    };
    Bienvenida.prototype.colorDesc = function (cdesc) {
        this.colordesc = cdesc;
        return this;
    };
    Bienvenida.prototype.descripcion = function (desc) {
        this.desc = desc;
        return this;
    };
    Bienvenida.prototype.avatar = function (avatar) {
        this.avatar = avatar;
        return this;
    };
    Bienvenida.prototype.fondo = function (fondo) {
        this.fondo = fondo;
        return this;
    };
    Bienvenida.prototype.estilo = function (estilo) {
        this.estilo = estilo;
        return this;
    };
    Bienvenida.prototype.colorCirculo = function (colorC) {
        this.colorCircle = colorC;
        return this;
    };
    Bienvenida.prototype.font = function (font) {
        this.font = font;
        return this;
    };
    return Bienvenida;
}());
exports.default = Bienvenida;
