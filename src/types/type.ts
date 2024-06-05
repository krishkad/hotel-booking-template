import { Schema } from "mongoose";

// ----------------------------> RROM PROPS
export interface roomProps {
    roomNumber: string
    type: ['Single', 'Double', 'Suite', 'Family'],
    price: number;
    amenities: [string],
    status: ['Available', 'Booked', 'Maintenance'],
    description: string,
    images: [String],
};


export interface guestProps {
    firstName: string,
    lastName: string,
    email: string,
    phone: number
    address: string,
    checkIn: Date,
    checkOut: Date
};

export interface bookingProps {
    guest?: guestProps,
    room?: Schema.Types.ObjectId,
    checkInDate?: Date,
    checkOutDate?: Date,
    status?: ['Confirmed', 'Cancelled', 'Completed'],
    totalAmount?: number,
    paymentStatus?: ['Pending', 'Paid', 'Failed'],
    specialRequests?: string,
};



export interface userTypes {
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    ADMIN?: boolean,
}

// ----------------------------> API RESPONSE 
export interface ApiResponse {
    success: boolean,
    message: string,
    data?: any,

};