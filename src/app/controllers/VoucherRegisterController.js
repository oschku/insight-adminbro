const { post } = require("../../admin/router");
const VoucherRegister = require("../models/VoucherRegister");

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
    
  }

};