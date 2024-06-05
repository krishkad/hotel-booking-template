"use server";
import Booking from "@/database/models/booking-model";
import { ApiResponse, bookingProps } from "@/types/type";


export async function createBooking(booking: bookingProps): Promise<ApiResponse> {
    try {
        if (!booking) return { success: false, message: "booking not found" };

        const create_booking = await Booking.create(booking);

        if (!create_booking) return { success: false, message: "booking failed" };

        return { success: true, message: "booking successful", data: create_booking };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};


export async function updateBooking(booking_id: string, update_booking: bookingProps): Promise<ApiResponse> {
    try {
        if (!booking_id) return { success: false, message: "booking id not found" };

        const booking = await Booking.findByIdAndUpdate(booking_id, update_booking);

        if (!booking) return { success: false, message: "failed to update booking" };

        return { success: true, message: "booking update successfully", data: booking };

    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};


export async function getBookingById(booking_id: string): Promise<ApiResponse> {
    try {
        if (!booking_id) return { success: false, message: "booking id not found" };

        const booking = await Booking.findById(booking_id);

        if (!booking) return { success: false, message: "booking not found" };

        return { success: true, message: "booking found successfully", data: booking };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };

    };
};


export async function getBookingByGuestId(guest_id: string): Promise<ApiResponse> {
    try {
        if (!guest_id) return { success: false, message: "guest id not found" };

        const booking = await Booking.findById(guest_id);

        if (!booking) return { success: false, message: "booking not found" };

        return { success: true, message: "booking found successfully", data: booking };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };

    };
};


export async function getAllBookingOfGuest(guest_id: string): Promise<ApiResponse> {
    try {
        if (!guest_id) return { success: false, message: "guest id not found" };

        const booking = await Booking.find({ guest: guest_id });

        if (!booking) return { success: false, message: "bookings not found" };

        return { success: true, message: "bookings found successfully", data: booking };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };

    };
};


export async function getAllBooking(): Promise<ApiResponse> {
    try {
        const booking = await Booking.find();

        if (!booking) return { success: false, message: "bookings not found" };

        return { success: true, message: "bookings found successfully", data: booking };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };

    };
};