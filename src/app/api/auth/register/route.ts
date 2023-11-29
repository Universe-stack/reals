import { NextResponse } from "next/server";
import { connectToDB } from "../../../../../helpers/server-helpers";
import prisma from "../../../../../prisma";
import bcrypt from 'bcrypt'

export const POST = async (req:Request) =>{
    try {
        const {name,email,password} = await req.json();
        if(!name ||!email||!password) 
            return NextResponse.json({message: "Invalid Data"}, {status: 422});

        const hashedPassword = await bcrypt.hash(password,10)
        await connectToDB()
        const user = await prisma.user.create({data:{email,name,hashedPassword}})

        return NextResponse.json({user}, {status: 201})
    }catch(error){
        console.log(error)
        return NextResponse.json({message: "server Error"},{status:201})
    }finally{
        await prisma.$disconnect();
    }
}