import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const JWT_SECRET = "naman123";
const router = Router();

//SIGNIN WITH WALLET  
//signing as message

const prismaClient = new PrismaClient(); //This Command helps you to add Data to the Database
//async are used with the function that run in the background, allowing other code to execute without waiting for the function to complete
router.post("/signin", async(req,res) => {
    const hardcodedWalletAddress = "RandomString";

    //const user = await prismaClient.user.upsert()//upsert function is used that if the user with this Address exist then updat it if does not then create one 
    //Keeping simple 

    const existingUser = await prismaClient.user.findFirst({
        where: {
            address : hardcodedWalletAddress
        }
    })   //User come with the HardcodedWalletAddress we check here if the user exists

    if (existingUser){
        const token = jwt.sign({
            userId : existingUser.id
        },JWT_SECRET)
        res.json({
            token
        })//If the User exists then we sign in with that userId and send the token to the Frontend
    } else{
        const User = await prismaClient.user.create({
            data : {
                address : hardcodedWalletAddress
            }
        }) //If user does not exixsts then we create a new user in the database

        const token = jwt.sign({
            userId : User.id
        },JWT_SECRET)  //Return the Id of thet newly created user

        res.json({
            token
        })
    }

});

export default router;
