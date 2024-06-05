import { Schema, model, models } from "mongoose";

const roomSchema = new Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Single', 'Double', 'Suite', 'Family'], // Define room types
    },
    price: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String], // List of amenities like 'WiFi', 'TV', 'Air Conditioning'
    },
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Booked', 'Maintenance'],
        default: 'Available',
    },
    description: {
        type: String,
    },
    images: {
        type: [String], // Array of image URLs
    },
});


const Room = models?.room || model('room', roomSchema);

export default Room;