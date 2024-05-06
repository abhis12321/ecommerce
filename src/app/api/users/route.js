import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await User.find();
        return NextResponse.json({data , success:true});
    } catch(error) {
        return NextResponse.json({message:error.message , success:false});
    }
}

export async function POST(req , res) {
    try {
        const data = await req.json();
        const newUser = new User(data);
        await newUser.save();
        return NextResponse.json({user:newUser , success:true});
    } catch(error) {
        return NextResponse.json({message:error.message , success:false});
    }
}

export async function PUT(req , res) {
    try {
        const data = await req.json();
        const user = await User.findOne({email:data.email});
        user.name = data.name;
        user.mobileNo = data.mobileNo;
        user.password = data.password;
        user.role = data.role;
        await user.save();
        return NextResponse.json({user , success:true});
    } catch(error) {
        return NextResponse.json({message:error.message , success:false});
    }
}