import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { findUserById } from "@/actions/user-action";


export async function GET(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const access_token = request.cookies.get('access-token')?.value.toString();

        if (!access_token) return NextResponse.json({ success: false, message: "access token not found" });

        const userInfo: any = jwt.verify(access_token, process.env.JWT_SECRET_KEY!);

        const user = await findUserById(userInfo._id);

        return NextResponse.json({ user: user.data });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    };
};