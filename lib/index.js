"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.img = exports.gif = void 0;
var gif_1 = __importDefault(require("./dist/gif"));
exports.gif = gif_1.default;
var img_1 = __importDefault(require("./dist/img"));
exports.img = img_1.default;
module.exports = {
    gif: gif_1.default,
    img: img_1.default
};
