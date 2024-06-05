"use server";
import Guest from "@/database/models/guest-model";
import { ApiResponse, guestProps } from "@/types/type";


export async function createGuest(guest: guestProps): Promise<ApiResponse> {
    try {
        if (!guest) return { success: false, message: "guest not found" };

        const created_guest = await Guest.create(guest);

        if (!created_guest) return { success: false, message: "guest creation failed" };

        return { success: false, message: "guest created successfull", data: created_guest };
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error.message };
    };
};


export async function updateGuest(guest_id: string, guest: guestProps): Promise<ApiResponse> {
    try {
        if (!guest) return { success: false, message: "guest not found" };
        if (!guest_id) return { success: false, message: "guest id not found" };

        const updated_guest = await Guest.findByIdAndUpdate(guest_id, guest);

        if (!updated_guest) return { success: false, message: "guest update failed" };

        return { success: false, message: "guest updated successfull", data: updated_guest };
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error.message };
    };
};


export async function getGuestById(guest_id: string): Promise<ApiResponse> {
    try {
        if (!guest_id) return { success: false, message: "guest id not found" };

        const guest = await Guest.findById(guest_id);

        if (!guest) return { success: false, message: "no guest exist" };

        return { success: false, message: "guest found successfull", data: guest };
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error.message };
    };
};


export async function getAllGuest(): Promise<ApiResponse> {
    try {
        const guests = await Guest.find();

        if (!guests) return { success: false, message: "fetch guest failed" };

        return { success: false, message: "guest found successfull", data: guests };
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error.message };
    };
};


export async function deleteGuestById(guest_id: string): Promise<ApiResponse> {
    try {
        if (!guest_id) return { success: false, message: "guest id not found" };

        const guest = await Guest.findByIdAndDelete(guest_id);

        if (!guest) return { success: false, message: "guest deletion exist" };

        return { success: false, message: "deleted successfull", data: guest };
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error.message };
    };
};

