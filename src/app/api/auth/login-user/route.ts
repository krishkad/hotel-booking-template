import { findUserByEmail } from "@/actions/user-action";
import { ConnectToDatabase } from "@/database/db-connect";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";



export async function POST(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const user = await request.json();

        if (!user) return NextResponse.json({ success: false, message: "user not found in request" });

        const find_user = await findUserByEmail(user.email);

        if (!find_user.data) return NextResponse.json({ success: false, message: "no such user exist" });

        const isPasswordCorrect = bcryptjs.compareSync(user.password, find_user.data.password);

        if (!isPasswordCorrect) return NextResponse.json({ success: false, message: "enter correct credentials" });

        const token_data = {
            _id: find_user.data._id,
            ADMIN: find_user.data.ADMIN
        };

        const access_token = jwt.sign(token_data, process.env.JWT_SECRET_KEY!);

        const cookieStore = cookies();
        cookieStore.set('access-token', access_token);

        return NextResponse.json({ success: true, message: "Login successfully", user: find_user.data });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
};