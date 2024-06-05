"use server";
import { cookies } from "next/headers";



export async function currentUser() {
    try {
        const nextCookies = cookies();
        const access_token = nextCookies.get("access-token");
        if (!access_token?.value) return { user: undefined, success: false };
        const response = await fetch(`${process.env.PUBLIC_DOMAIN}api/auth/current-user`, {
            method: "GET",
            headers: {
                Cookie: `access-token=${access_token?.value}`,
            }
        });
        const res = await response.json();
        const user = res.user;
        return user;

    } catch (error: any) {
        console.log(error);
        return console.log(error.message);
    };
};