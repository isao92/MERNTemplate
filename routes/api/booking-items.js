const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Booking Item Model
const BookingItem = require('../../models/BookingItem')

// @route GET api/booking-items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  BookingItem.find()
    .sort({ date: -1 })
    .then(bookingItems => res.json(bookingItems))
})

// @route POST api/items
// @desc Create An Item
// @access Private
router.post('/', auth, (req, res) => {
  const newBookingItem = new BookingItem({
    name: req.body.name
  })

  newBookingItem.save().then(bookingItem => res.json(bookingItem))
})

// @route DELETE api/items/:id
// @desc Create A Item
// @access Private
router.delete('/:id', auth, (req, res) => {
  BookingItem.findById(req.params.id)
    .then(bookingItem => bookingItem.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})



module.exports = router