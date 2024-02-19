const Booking = require("../models/booking");

const BookingCtrl = {};


BookingCtrl.getBookings = async (req, res, next) => {
    try{
        const save = await Booking.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

BookingCtrl.createBooking = async (req, res, next) => {
    try{
        const { profesional, service, day, month,hour} = req.body;

        const body = { profesional, service, day, month,hour};
        var save= await Booking.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

BookingCtrl.getBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Booking.find({ email: id});
        res.status(400).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

BookingCtrl.editBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Booking.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(400).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

BookingCtrl.deleteBooking = async (req, res, next) => {
    try{
        await Booking.findByIdAndRemove(req.params.id);
        res.json({ status: "Booking Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};




module.exports = BookingCtrl;