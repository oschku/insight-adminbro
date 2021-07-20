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
  },

  async postVoucher(req, res) {
    
    const {
      userId,
      voucherId,
      partnerId,
      benefitValue,
      benefitType,
      name
    } = req.body;

    console.log(req.body)

    const voucher = new Vouchers({
      userId,
      voucherId,
      partnerId,
      benefitValue,
      benefitType,
      name
    })

    await voucher.save()
    res.send(200, 'Voucher saved succesfully')
  
  }

};