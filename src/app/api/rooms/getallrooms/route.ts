import { getAllRooms } from "@/actions/room-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextResponse } from "next/server";


export async function GET() {
    await ConnectToDatabase();
    try {
        const rooms = await getAllRooms();

        if (!rooms.success) return NextResponse.json({ success: rooms.success, message: rooms.message });

        return NextResponse.json({ success: rooms.success, message: rooms.message, rooms: rooms.data });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};