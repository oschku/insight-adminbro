const Coupons = require("../models/Coupons");

module.exports = {
  async index(req, res) {
    const coupons = await Coupons.find({}).limit(1000);

    res.send(coupons);
  },
  async getOne(req, res) {
    const id = req.params.id
    const coupons = await Coupons.find({ userId:id })      
    res.send(coupons);
  },

  async postCoupon(req, res) {
    
    
    var {
      userId,
      goldCoupons,
      silverCoupons,
      bronzeCoupons
    } = req.body;

    const filter = {userId}
    const current = await Coupons.findOne(filter)

    console.log(current)

    if (current !== null){
      if (current.goldCoupons === undefined) current.goldCoupons = 0
      if (current.silverCoupons === undefined) current.silverCoupons = 0
      if (current.bronzeCoupons === undefined) current.bronzeCoupons = 0
      
      goldCoupons += current.goldCoupons
      silverCoupons += current.silverCoupons
      bronzeCoupons += current.bronzeCoupons


      if (current.goldCoupons < 0 ) goldCoupons = 0
      if (current.silverCoupons < 0 ) silverCoupons = 0
      if (current.bronzeCoupons < 0 ) bronzeCoupons = 0

      const updatePoints = { goldCoupons, silverCoupons, bronzeCoupons } 
      
       const coupons = await Coupons.findOneAndUpdate(filter, updatePoints, {
        new: true
    });

    res.send(200, 'coupons updated succesfully')
    } else {

      const coupons = new Coupons({
        userId,
        goldCoupons:0,
        silverCoupons:0,
        bronzeCoupons:0
      })
  
      await coupons.save()
      res.send(200, 'Coupon saved succesfully')
    }  
  }

};