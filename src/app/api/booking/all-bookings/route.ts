import { getAllBooking } from "@/actions/booking-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const bookings = await getAllBooking();

        if (!bookings.success) return NextResponse.json({ success: bookings.success, message: bookings.message });

        return NextResponse.json({ success: bookings.success, message: bookings.message, bookings: bookings.data });

    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message })
    };
};