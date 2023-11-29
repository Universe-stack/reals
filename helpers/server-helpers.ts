import prisma from "../prisma"

export const connectToDB = async ()=>{
    try {
        await prisma.$connect();
    } catch(error){
        console.log(error)
        throw new Error("unable to connect t DB!")
    }
}