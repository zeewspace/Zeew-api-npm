"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ZeewError_1 = require("../utils/ZeewError");
var cards_1 = __importDefault(require("./cards"));
var filter_1 = __importDefault(require("./filter"));
var img = /** @class */ (function () {
    function img(token) {
        if (!token)
            throw new ZeewError_1.ZeewError("Debes colocar el token");
        this.token = token;
        this.card = new cards_1.default(token);
        this.filter = new filter_1.default(token);
    }
    return img;
}());
exports.default = img;
