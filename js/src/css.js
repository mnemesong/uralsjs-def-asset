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
exports.getPath = exports.getAll = exports.getColors = exports.getTable = exports.getNav = exports.getMain = exports.getFonts = exports.getBootstrap = void 0;
var p = __importStar(require("path"));
var getBootstrap = function () { return p
    .resolve(module.path, "..", "..", "resources", "bootstrap.min.css"); };
exports.getBootstrap = getBootstrap;
var getFonts = function () { return p
    .resolve(module.path, "..", "..", "resources", "fonts.css"); };
exports.getFonts = getFonts;
var getMain = function () { return p
    .resolve(module.path, "..", "..", "resources", "main.css"); };
exports.getMain = getMain;
var getNav = function () { return p
    .resolve(module.path, "..", "..", "resources", "nav.css"); };
exports.getNav = getNav;
var getTable = function () { return p
    .resolve(module.path, "..", "..", "resources", "table.css"); };
exports.getTable = getTable;
var getColors = function () { return p
    .resolve(module.path, "..", "..", "resources", "colors.css"); };
exports.getColors = getColors;
var getAll = function () { return [
    (0, exports.getBootstrap)(),
    (0, exports.getFonts)(),
    (0, exports.getMain)(),
    (0, exports.getNav)(),
    (0, exports.getTable)(),
    (0, exports.getColors)(),
]; };
exports.getAll = getAll;
var getPath = function () { return p
    .resolve(module.path, "..", "..", "resources"); };
exports.getPath = getPath;
