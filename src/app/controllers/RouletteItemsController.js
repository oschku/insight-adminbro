const RouletteItems = require("../models/RouletteItems");

module.exports = {
  async index(req, res) {
    const rouletteItems = await RouletteItems.find({}).limit(1000);

    res.send(rouletteItems);
  },
  async getOne(req, res) {
    const id = req.params.id
    const rouletteItems = await RouletteItems.find({ voucherId:id })      
    res.send(rouletteItems);
  }

};