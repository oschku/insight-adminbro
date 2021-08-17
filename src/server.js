require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const server = express()

const admin = require('./admin/router')
const User = require('./app/controllers/UserController')
const Surveys = require('./app/controllers/SurveyController')
const Cards = require('./app/controllers/CardsController')
const Vouchers = require('./app/controllers/VouchersController')
const VoucherRegister = require('./app/controllers/VoucherRegisterController')
const RouletteItems = require('./app/controllers/RouletteItemsController')
const Coupons = require('./app/controllers/CouponsController')
const Boosts = require('./app/controllers/BoostsController')

server
  .use(express.json())
  .use(cors())
  // routes
  .use('/admin', admin)
  .get('/api/users', User.index)
  .get('/api/users/:id', User.getOne)
  .get('/api/surveys', Surveys.index)
  .get('/api/surveys/:id', Surveys.getOne)
  .get('/api/cards', Cards.index)
  .get('/api/cards/:id', Cards.getOne)
  .get('/api/vouchers', Vouchers.index)
  .get('/api/vouchers/:id', Vouchers.getOne)
  .get('/api/vouchers/user/:id', Vouchers.getUser)
  .get('/api/vouchers/reg/all', VoucherRegister.index)
  .get('/api/vouchers/reg/:id', VoucherRegister.getOne)
  .post('/api/vouchers/reg', VoucherRegister.post)
  .post('/api/vouchers/reg/redeem', VoucherRegister.redeem)
  .get('/api/rouletteitems', RouletteItems.index)
  .get('/api/rouletteitems/:id', RouletteItems.getOne)
  .post('/api/vouchers', Vouchers.postVoucher)
  .get('/api/coupons', Coupons.index)
  .get('/api/coupons/:id', Coupons.getOne)
  .post('/api/coupons', Coupons.postCoupon)
  .get('/api/boosts', Boosts.index) 



const run = async() => {
    const { MONGO_URI, PORT } = process.env

    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    server.listen(PORT, () => console.log('Server started'))
}

run();