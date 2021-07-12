const Vouchers = require("../models/Vouchers");

module.exports = {
  async index(req, res) {
    const vouchers = await Vouchers.find({}).limit(1000);

    res.send(vouchers);
  },
  async getOne(req, res) {
    const id = req.params.id
    const vouchers = await Vouchers.find({ voucherId:id })      
    res.send(vouchers);
  },

  async getUser(req, res) {
    const id = req.params.id
    const vouchers = await Vouchers.find({ userId:id })      
    res.send(vouchers);
  }

};