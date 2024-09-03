import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { User } from "@/lib/Model/user";

export async function POST(req) {
  await dbConnect();
  let { email } = await req.json();
  let checkUser = await User.find({ email });
  console.log(email);
  if (checkUser.length && checkUser) {
    return NextResponse.json({ question: checkUser.totalQuestion });
  } else if (email) {
    let newuser = new User({
      email: email,
    });
    await newuser.save();
  }
  return NextResponse.json({ question: "0" });
}
