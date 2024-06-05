import { updateBooking } from "@/actions/booking-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const booking_id = request.nextUrl.searchParams.get('booking-id');
        if (!booking_id) return NextResponse.json({ success: false, message: "booking id not found" });

        const new_data = await request.json();
        if (!new_data) return NextResponse.json({ success: false, message: "new data not found in request" });

        const update_booking = await updateBooking(booking_id, new_data);

        if (!update_booking.success) return NextResponse.json({ success: update_booking.success, message: update_booking.message });

        return NextResponse.json({ success: update_booking.success , message: update_booking.message , update_booking: update_booking.data});
        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};