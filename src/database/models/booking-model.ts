import { Schema, model, models } from "mongoose";

const bookingSchema = new Schema({
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'Guest',
        required: true,
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Confirmed', 'Cancelled', 'Completed'],
        default: 'Confirmed',
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending',
    },
    specialRequests: {
        type: String,
    },
});

const Booking = models?.booking || model('booking', bookingSchema);

export default Booking;