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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatas = exports.getData = exports.createData = void 0;
const index_js_1 = require("../db/index.js");
const mongodb_1 = require("mongodb");
const createData = () => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield (0, index_js_1.dbConnect)();
        const { year, formallyServed, banked, otherFormal, informallyServed, excluded, bankAccount, savingGroupMember, mfiSaccos, umurengeSACCO, borrowingCredit, insuranceRiskMitigation, mobileMoneyPenetration, savingsInvestments } = req.body;
        const financialData = {
            year,
            formallyServed,
            banked,
            otherFormal,
            informallyServed,
            excluded,
            bankAccount,
            savingGroupMember,
            mfiSaccos,
            umurengeSACCO,
            borrowingCredit,
            insuranceRiskMitigation,
            mobileMoneyPenetration,
            savingsInvestments
        };
        const data = yield (db === null || db === void 0 ? void 0 : db.data.insertOne(financialData));
        if (!data) {
            const errorResponse = { error: 'request failed' };
            res.status(400).json(errorResponse);
            return;
        }
        const response = { data: financialData, status: 201 };
        res.status(response.status).json(response);
    });
};
exports.createData = createData;
const getData = () => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield (0, index_js_1.dbConnect)();
        const dataId = req.params.dataId;
        const data = yield (db === null || db === void 0 ? void 0 : db.data.findOne({ _id: new mongodb_1.ObjectId(dataId) }));
        if (!data) {
            const errorResponse = { error: 'Data not found' };
            res.status(400).json(errorResponse);
            return;
        }
        const response = { data: data, status: 200 };
        res.status(response.status).json(response);
    });
};
exports.getData = getData;
const getDatas = () => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield (0, index_js_1.dbConnect)();
        const data = yield (db === null || db === void 0 ? void 0 : db.data.find({}).toArray());
        if (!data || (yield data).length === 0) {
            const errorResponse = { error: 'No datas found' };
            res.status(400).json(errorResponse);
            return;
        }
        const response = { data: data, status: 200 };
        res.status(response.status).json(response);
    });
};
exports.getDatas = getDatas;
//# sourceMappingURL=addFinancialData.js.map