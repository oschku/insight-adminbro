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
  }

};