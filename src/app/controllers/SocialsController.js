const Socials = require("../models/Socials");

module.exports = {
  async index(req, res) {
    const boosts = await Socials.find({}).limit(1000);
    res.send(boosts);
  },
  async getOne(req, res) {
    const userId = req.params.userId
    const cards = await Socials.find({ userId })
    res.send(cards);
  },

  async postOne(req, res) {
    const {
      userId,
      socialId,
      liked,
      closed,
      expanded,
      shared
    } = req.body

    const data = {
      userId,
      socialId,
      liked,
      closed,
      expanded,
      shared
    }

    const filter = { userId, socialId }
    const result = await Socials.findOne(filter)

    if (!result) {

      Object.keys(data).forEach(function (key) {
        if (data[key] === undefined || data[key] === null) {
          data[key] = false;
        }
      })

      console.log('data:', data)

      const social = new Socials(data)

      await social.save()
      return res.send(200)

    } else {

      var updateSocials = {
        liked,
        closed,
        expanded,
        shared
      }

      Object.filter = (obj, predicate) =>
        Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => (res[key] = obj[key], res), {});

      updateSocials = Object.filter(updateSocials, x => x !== undefined)
      
      console.log('filtered objects: ', updateSocials)

      await Socials.findOneAndUpdate(filter, updateSocials, {
        new: true
      });
      return res.send(200)
    }


  },
  async getAggregates(req, res) {
    const socialId = req.params.socialId
    const cards = await Socials.find({ socialId })

    var likes = cards.map(x => x.liked)
    likes = likes.filter(x => x === true)
    likes = likes.length

    data = {likes}
    console.log(data)

    data = Object.entries(data).map((e) => ( { [e[0]]: e[1] } ));
    

    res.send(data);
  },

};