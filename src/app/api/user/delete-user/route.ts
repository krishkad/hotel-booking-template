import { deleteUserByid } from "@/actions/user-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const user_id = request.nextUrl.searchParams.get('user-id');

        if (!user_id) return NextResponse.json({ success: false, message: "user id not found" });

        const user = await deleteUserByid(user_id);

        if (!user.success) return NextResponse.json({ success: false, message: user.message });

        return NextResponse.json({ success: user.success, message: user.message, user: user.data });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}