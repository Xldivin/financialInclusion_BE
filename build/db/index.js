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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
// const dbUri = process.env.MONGO_URI || 'mongodb+srv://Divin:axel123@cluster0.rwph7ck.mongodb.net/?retryWrites=true&w=majority';
const dbUri = 'mongodb+srv://Divin:axel123@cluster0.rwph7ck.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(dbUri);
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Connecting to database...');
            yield client.connect();
            console.log('Connected to database');
            const db = client.db('financial_collection');
            const data = db.collection('data');
            return { data };
        }
        catch (error) {
            console.error(error);
            yield client.close();
        }
    });
}
exports.dbConnect = dbConnect;
//# sourceMappingURL=index.js.map