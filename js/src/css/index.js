"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPaths = exports.helper = exports.table = exports.nav = exports.main = exports.fonts = exports.colors = exports.bootstrap = void 0;
exports.bootstrap = __importStar(require("./bootstrap"));
exports.colors = __importStar(require("./colors"));
exports.fonts = __importStar(require("./fonts"));
exports.main = __importStar(require("./main"));
exports.nav = __importStar(require("./nav"));
exports.table = __importStar(require("./table"));
exports.helper = __importStar(require("./helper"));
var bootstrap = __importStar(require("./bootstrap"));
var colors = __importStar(require("./colors"));
var fonts = __importStar(require("./fonts"));
var main = __importStar(require("./main"));
var nav = __importStar(require("./nav"));
var table = __importStar(require("./table"));
var getAllPaths = function () { return [
    bootstrap.getPath(),
    colors.getPath(),
    fonts.getPath(),
    main.getPath(),
    nav.getPath(),
    table.getPath(),
]; };
exports.getAllPaths = getAllPaths;
