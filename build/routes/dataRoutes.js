"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addFinancialData_js_1 = require("../controllers/addFinancialData.js");
const addFinancialData_js_2 = require("../controllers/addFinancialData.js");
const addFinancialData_js_3 = require("../controllers/addFinancialData.js");
const data = (0, express_1.Router)();
data.post('/data', (0, addFinancialData_js_1.createData)());
data.get('/data/:dataId', (0, addFinancialData_js_2.getData)());
data.get('/data', (0, addFinancialData_js_3.getDatas)());
exports.default = data;
//# sourceMappingURL=dataRoutes.js.map