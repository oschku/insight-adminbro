const VoucherRegister = require("../models/VoucherRegister");

module.exports = {
  async index(req, res) {
    const voucherRegister = await VoucherRegister.find({}).limit(1000);

    res.send(voucherRegister);
  },
  async getOne(req, res) {
    const id = req.params.id
    const voucherRegister = await VoucherRegister.find({ voucherId:id })      
    res.send(voucherRegister);
  }

};