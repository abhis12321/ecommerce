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