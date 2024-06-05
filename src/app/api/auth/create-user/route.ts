import { findUserByEmail } from "@/actions/user-action";
import User from "@/database/models/user-model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ConnectToDatabase } from "@/database/db-connect";
import { cookies } from "next/headers";



export async function POST(request: NextRequest) {
    await ConnectToDatabase();
    try {
        const user = await request.json();

        if (!user) return NextResponse.json({ success: false, message: "enter correct credentials" });

        const isExist = await findUserByEmail(user.email);

        if (isExist.data) return NextResponse.json({ success: false, message: "user already exist" });

        const hashpassword = bcryptjs.hashSync(user.password, 10);

        const created_user = await User.create({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: hashpassword
        });

        if (!created_user) return NextResponse.json({ sucess: false, message: "faild to create user" });

        const tokendata = {
            _id: created_user._id,
            ADMIN: created_user.ADMIN,
        };

        const access_token = jwt.sign(tokendata, process.env.JWT_SECRET_KEY!, {
            issuer: process.env.PUBLIC_DOMAIN,
        });
        console.log(access_token)

        const cookieStore = cookies();
        cookieStore.set('access-token', access_token);
        return NextResponse.json({ success: true, message: "user created successfully", user: created_user });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
};