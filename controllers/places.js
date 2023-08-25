const router = require('express').Router()
// const places = require('../models')
let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/thai-curry.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/steam-coffee.jpg'
}]
// router.get('/', (req, res) => {
//     res.render('GET /places')
// })
// GET /places
router.get('/', (req, res) => {

      
      res.render('places/index', { places })

  })
  
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
      res.render('places/show', { place: places[id] })

  }
})

module.exports = router

