"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_superfetch_1 = __importDefault(require("node-superfetch"));
var ZeewError_1 = require("../utils/ZeewError");
var key_1 = require("../utils/key");
var Filter = /** @class */ (function () {
    function Filter(token) {
        if (!token)
            throw new ZeewError_1.ZeewError("Debes colocar el token");
        this.token = token;
        this.uri = key_1.INT + "/img";
    }
    /**
     * @param {img} img URL de una imagen
     * @returns {img} <Buffer>
     */
    Filter.prototype.triggered = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/triggered")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URI de una imagen
     * @returns {img} <Buffer>
     */
    Filter.prototype.sepia = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/sepia")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URI de una imagen
     * @returns {img} <Buffer>
     */
    Filter.prototype.invertir = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/invertir")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URI de una imagen
     * @returns {img} <Buffer>
     */
    Filter.prototype.gris = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/gris")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URI de una imagen
     * @param {pixels} pixels Cantidad de desenfoque
     * @returns {img} <Buffer>
     */
    Filter.prototype.desenfoque = function (img, pixel) {
        if (pixel === void 0) { pixel = "5"; }
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/desenfoque")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                                pixel: pixel,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignored
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URI de una imagen
     * @param {size} size Tamaño del pixel
     * @returns {img} <Buffer>
     */
    Filter.prototype.pixel = function (img, pixel) {
        if (pixel === void 0) { pixel = "10"; }
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/pixel")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                                pixel: pixel,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URI de una imagen
     * @returns {img} <Buffer>
     */
    Filter.prototype.gay = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/gay")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     *
     * @param {img} img URL | URL de una imagen
     * @returns {img} <Buffer>
     */
    Filter.prototype.circulo = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/circulo")
                                .set("token", this.token)
                                .query({
                                avatar: img,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    Filter.prototype.shipeo = function (img1, img2, ship) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!img1)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        if (!img2)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        if (!ship)
                            throw new ZeewError_1.ZeewError("Debes colocar una imagen");
                        return [4 /*yield*/, node_superfetch_1.default
                                .get(this.uri + "/shipeo")
                                .set("token", this.token)
                                .query({
                                avatar: img1,
                                avatar2: img2,
                                ship: ship,
                            })];
                    case 1:
                        body = (_a.sent()).body;
                        // @ts-ignore
                        if (body.status === "404")
                            throw new ZeewError_1.ZeewError(body.mensaje);
                        return [2 /*return*/, body];
                }
            });
        });
    };
    return Filter;
}());
exports.default = Filter;
