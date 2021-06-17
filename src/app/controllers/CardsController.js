const Cards = require("../models/Cards");

module.exports = {
  async index(req, res) {
    const cards = await Cards.find({}).limit(1000);

    res.send(cards);
  },
  async getOne(req, res) {
    const id = req.params.id
    const cards = await Cards.find({ id })      
    res.send(cards);
  }

};