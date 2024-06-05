import { updateUserByid } from "@/actions/user-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const user = await request.json();
        const user_id = request.nextUrl.searchParams.get('user-id');

        if (!user) return NextResponse.json({ success: false, messaeg: "user id not found in request" });
        if (!user_id) return NextResponse.json({ success: false, messaeg: "user id not found in request params" });

        const updated_user = await updateUserByid(user_id, user);

        if(!updated_user.success) return NextResponse.json({success: updated_user.success , message: updated_user.message});

        return NextResponse.json({success: updated_user.success, message: updated_user.message , user: updated_user.data});

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
};