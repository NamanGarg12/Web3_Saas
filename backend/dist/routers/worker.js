"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "naman123";
const router = (0, express_1.Router)();
//SIGNIN WITH WALLET  
//signing as message
const prismaClient = new client_1.PrismaClient(); //This Command helps you to add Data to the Database
//async are used with the function that run in the background, allowing other code to execute without waiting for the function to complete
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hardcodedWalletAddress = "RandomString";
    //const user = await prismaClient.user.upsert()//upsert function is used that if the user with this Address exist then updat it if does not then create one 
    //Keeping simple 
    const existingUser = yield prismaClient.user.findFirst({
        where: {
            address: hardcodedWalletAddress
        }
    }); //User come with the HardcodedWalletAddress we check here if the user exists
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({
            userId: existingUser.id
        }, JWT_SECRET);
        res.json({
            token
        }); //If the User exists then we sign in with that userId and send the token to the Frontend
    }
    else {
        const User = yield prismaClient.user.create({
            data: {
                address: hardcodedWalletAddress
            }
        }); //If user does not exixsts then we create a new user in the database
        const token = jsonwebtoken_1.default.sign({
            userId: User.id
        }, JWT_SECRET); //Return the Id of thet newly created user
        res.json({
            token
        });
    }
}));
exports.default = router;
