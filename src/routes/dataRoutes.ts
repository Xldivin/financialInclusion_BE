import { Router } from 'express';
import { createData } from '../controllers/addFinancialData.js';
import { getData } from '../controllers/addFinancialData.js';
import { getDatas } from '../controllers/addFinancialData.js';

const data: Router = Router();

data.post('/data', createData());
data.get('/data/:dataId', getData());
data.get('/data', getDatas());

export default data;
