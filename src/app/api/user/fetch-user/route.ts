import { findUserById } from "@/actions/user-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const user_id = request.nextUrl.searchParams.get('user-id');

        if (!user_id) return NextResponse.json({ success: false, message: "user id not found in request params" });

        const user = await findUserById(user_id);

        if (!user.data) return NextResponse.json({ success: false, message: "user not found" });

        return NextResponse.json({ success: true, message: "user found", user: user.data });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};