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
  },
  async getById(req, res) {
    const _id = req.params.id
    const cards = await Cards.find({ _id })      
    res.send(cards);
  }

};