"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ZeewError_1 = require("../utils/ZeewError");
var sfw_1 = __importDefault(require("./sfw"));
var nsfw_1 = __importDefault(require("./nsfw"));
var gif = /** @class */ (function () {
    function gif(token) {
        if (!token)
            throw new ZeewError_1.ZeewError("Debes colocar el token");
        this.token = token;
        this.sfw = new sfw_1.default(token);
        this.nsfw = new nsfw_1.default(token);
    }
    return gif;
}());
exports.default = gif;
