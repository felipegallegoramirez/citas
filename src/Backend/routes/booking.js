const express = require("express");
const router = express.Router();
const booking = require("../controllers/booking.controller")

router.get("/", booking.getBookings);
router.post("/", booking.createBooking); 
router.get("/:id", booking.getBooking); 
router.put("/:id",booking.editBooking);
router.delete("/:id", booking.deleteBooking);



module.exports = router 