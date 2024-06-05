"use server";
import Room from "@/database/models/room-model";
import { ApiResponse, roomProps } from "@/types/type";


export async function createRoom(room: roomProps): Promise<ApiResponse> {
    try {
        if (!room) return { success: false, message: "room not found" };

        const created_room = await Room.create(room);

        if (!created_room) return { success: false, message: "room creation faild. Try again " };

        return { success: true, message: "room created successfully", data: created_room };

    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};


export async function getSingleRoom(room_id: string): Promise<ApiResponse> {
    try {
        if (!room_id) return { success: false, message: "room id not found" };

        const room = await Room.findById(room_id);

        if (!room) return { success: false, message: "room not found" };

        return { success: true, message: "room found successfully", data: room };

    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};


export async function getAllRooms(): Promise<ApiResponse> {
    try {

        const room = await Room.find();

        if (!room) return { success: false, message: "rooms not found" };

        return { success: true, message: "rooms found successfully", data: room };

    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};


export async function deleteRooms(room_id: string): Promise<ApiResponse> {
    try {
        if (!room_id) return { success: false, message: "room id not found" };

        const room = await Room.findByIdAndDelete(room_id);

        if (!room) return { success: false, message: "rooms not found" };

        return { success: true, message: "rooms found successfully", data: room };

    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};