import { NextResponse } from "next/server";
import { User } from "@/lib/models/UserModel";
import { setJWTUser } from "@/utils/setJWTUser";

export async function GET() {
    try {
        const data = await User.find();
        return NextResponse.json({ data, success: true });
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false });
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        const newUser = new User(data);
        await newUser.save();
        return NextResponse.json({ message: "Registration completed!", success: true });
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false });
    }
}

export async function PUT(req) {
    try {
        const data = await req.json();
        let user = await User.findOne({ email: data.email });
        user = { ...user, user_name, user_role, mobile_no, password };
        await user.save();
        return NextResponse.json({ user, success: true });
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false });
    }
}
export async function PATCH(req) {
    try {
        const data = await req.json();
        const { email, password, user_role } = data;
        const user = (await User.findOne({ email, password, user_role })).toObject();
        delete user.password;
        setJWTUser(user);
        return NextResponse.json({ user, success: true });
    } catch (error) {
        // console.log(error.message)
        return NextResponse.json({ message: "Invalid Login Credentials", success: false });
    }
}