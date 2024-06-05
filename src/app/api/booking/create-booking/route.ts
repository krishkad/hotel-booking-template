import { createBooking } from "@/actions/booking-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const booking = await request.json();

        if (!booking) return NextResponse.json({ success: false, message: "booking data not found from request" });

        const created_booking = await createBooking(booking);

        if (!created_booking.success) return NextResponse.json({ success: created_booking.success, message: created_booking.message });

        return NextResponse.json({ success: created_booking.success, message: created_booking.message, booking: created_booking.data });

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};