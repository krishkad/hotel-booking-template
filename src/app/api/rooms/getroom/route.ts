import { getSingleRoom } from "@/actions/room-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const room_id = request.nextUrl.searchParams.get('room-id');

        if(!room_id) return NextResponse.json({success: false, message: "room-id is missing"});

        const room = await getSingleRoom(room_id);

        if(!room.success) return NextResponse.json({success: room.success, message: room.message});

        return NextResponse.json({success: room.success, message: room.message , room: room.data });

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};