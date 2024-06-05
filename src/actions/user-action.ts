"use server";
import User from "@/database/models/user-model";
import { ApiResponse, userTypes } from "@/types/type";


export async function findUserByEmail(email: string): Promise<ApiResponse> {
    try {
        if (!email) return { success: false, message: "email not provided" };

        const user = await User.findOne({ email });

        if (!user) return { success: false, message: `no email found with this email: ${email}` };

        return { success: true, message: "user found", data: user };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};

export async function findUserById(user_id: string): Promise<ApiResponse> {
    try {
        if (!user_id) return { success: false, message: "user id not provided" };

        const user = await User.findById(user_id);

        if (!user) return { success: false, message: `no user found` };

        return { success: true, message: "user found", data: user };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: error.message };
    };
};

export async function updateUserByid(user_id: string , updated_user: userTypes): Promise<ApiResponse> {
    try {
        if(!user_id) return {success: false, message: "user id not found"};

        const user = await User.findByIdAndUpdate(user_id, updated_user);

        if(!user) return {success: false, message: "faild to update user"};

        return {success: true , message: "successfully updated", data: user};

    } catch (error: any) {
        console.log(error);
        return {success: false, message: error.message};
    };
};

export async function deleteUserByid(user_id: string): Promise<ApiResponse> {
    try {
        if(!user_id) return {success: false, message: "user id not found"};

        const user = await User.findByIdAndDelete(user_id);

        if(!user) return {success: false, message: "faild to delete user"};

        return {success: true , message: "successfully deleted", data: user};

    } catch (error: any) {
        console.log(error);
        return {success: false, message: error.message};
    };
};
