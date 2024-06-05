import { createRoom } from "@/actions/room-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const room = await request.json();

        if (!room) return NextResponse.json({ success: false, message: "room not found" });

        const created_room = await createRoom(room);

        if (!created_room.success) return NextResponse.json({ success: false, message: created_room.message });

        return NextResponse.json({ success: true, message: created_room.message, room: created_room.data });

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};