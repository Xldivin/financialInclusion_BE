import { Request, Response } from 'express';
import { dbConnect } from '../db/index.js';
import { ObjectId } from 'mongodb';

export const createData = () => {
    return async (req: Request, res: Response) => {
      const db = await dbConnect();
      const { year, formallyServed, banked, otherFormal, informallyServed, excluded,bankAccount, savingGroupMember, mfiSaccos, umurengeSACCO, borrowingCredit, insuranceRiskMitigation, mobileMoneyPenetration, savingsInvestments } = req.body;
  
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
  
      const data = await db?.data.insertOne(financialData);
      if (!data) {
        const errorResponse = { error: 'request failed' };
        res.status(400).json(errorResponse);
        return;
      }
      const response = { data: financialData, status: 201 };
      res.status(response.status).json(response);
    };
};

export const getData = () => {
    return async (req: Request, res: Response) => {
      const db = await dbConnect();
      const dataId = req.params.dataId;
  
      const data = await db?.data.findOne({ _id: new ObjectId(dataId) });
  
      if (!data) {
        const errorResponse = { error: 'Data not found' };
        res.status(400).json(errorResponse);
        return;
      }
  
      const response = { data: data, status: 200 };
      res.status(response.status).json(response);
    };
};

export const getDatas = () => {
    return async (req: Request, res: Response) => {
      const db = await dbConnect();
      const data = await db?.data.find({}).toArray();
  
      if (!data || (await data).length === 0) {
          const errorResponse = { error: 'No datas found' };
          res.status(400).json(errorResponse);
          return;
      }
      const response = { data: data, status: 200 };
      res.status(response.status).json(response);
    };
};