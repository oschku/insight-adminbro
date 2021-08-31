const Faqs = require("../models/Faqs");

module.exports = {
  async index(req, res) {
    const faqs = await Faqs.find({}).limit(1000);

    res.send(faqs);
  }

};