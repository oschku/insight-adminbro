const { post } = require("../../admin/router");
const VoucherRegister = require("../models/VoucherRegister");
const Vouchers = require('../models/Vouchers');

module.exports = {
  async index(req, res) {
    const voucherReg = await VoucherRegister.find();
    res.send(voucherReg);
  },
  
  async getOne(req, res) {
    const id = req.params.id
    const voucherRegister = await VoucherRegister.find({ voucherId:id })      
    res.send(voucherRegister);
  },
  
  async post(req, res) {
    const {
      voucherId,
      benefitValue,
      benefitType,
    } = req.body;
    
    const filter = {
      voucherId
    }

    const current = await VoucherRegister.findOne(filter);
    
    if (benefitType === 'Lahjakortti'){
      const valueTotal = current.valueTotal - benefitValue
      const totalUnits = current.totalUnits - 1

      const update = {
        valueTotal,
        totalUnits
      }

      await VoucherRegister.findOneAndUpdate(filter, update,  {
        new: true
      });
    
    } else if (benefitType === 'Alennus') {
      const totalUnits = current.totalUnits - 1
      const update = {
        totalUnits
      }

      await VoucherRegister.findOneAndUpdate(filter, update,  {
        new: true
      });
    }

    return res.send(200, 'voucher register updated')
    
  },

  async redeem(req, res){
    
    const {
      userId,
      voucherId
    } = req.body;

    const filter = {
      voucherId
    }

    const current = await VoucherRegister.findOne(filter)
    const totalUnitsRedeemed = current.totalUnitsRedeemed + 1
    const update = {totalUnitsRedeemed}

    await VoucherRegister.findOneAndUpdate(filter, update, {
      new: true
    });
    console.log('voucher reedeem')


    const filter2 = {
      userId,
      voucherId
    }

    console.log(filter2)

    const update2 = {
      redeemed: true
    }

    await Vouchers.findOneAndUpdate(filter2, update2, {
      new: true
    });


    
    return res.send(200, 'voucher unit redeemed')

  }

};