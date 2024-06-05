import { getBookingById } from "@/actions/booking-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const booking_id = request.nextUrl.searchParams.get('booking-id');

        if(!booking_id) return NextResponse.json({success: false, message: "booking id not found in request params"});

        const booking = await getBookingById(booking_id);

        if(!booking.success) return NextResponse.json({success: false, message: booking.message});

        return NextResponse.json({success: booking.success , message: booking.message , booking: booking.data});
        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({success: false, message: error.message});
    };
}; 