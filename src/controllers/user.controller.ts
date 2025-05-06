import {Request, Response} from "express";
import { handleCreateUser, getAllUssers } from "../services/user.service";


const getHomePage = async (req: Request, res: Response) => {
    //get users
    const users = await getAllUssers();

     return res.render("home", {
        users: users, //lấy giá trị tay phải gán tay trái x <- y
     })
}

const getCreateUserPage = (req: Request, res: Response) => {

    return res.render("create-user")
}

const postCreateUserPage = async (req: Request, res: Response) => {
   //object destructuring
    const {fullName, email, address} = req.body;
    
    //handle create user
    await handleCreateUser(fullName, email, address);

    return res.redirect("/")
}


export {getHomePage, getCreateUserPage, postCreateUserPage}