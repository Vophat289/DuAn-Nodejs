import {Request, Response} from "express";
import { console } from "inspector";
import { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, UpdateUserById, getAllRoles } from "services/user.service";


const getHomePage = async (req: Request, res: Response) => {
    //get users
    const users = await getAllUsers();

     return res.render("home", {
        users: users, //lấy giá trị tay phải gán tay trái x <- y
     })
}

const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRoles();
    console.log(roles);
    
    return res.render("admin/user/create.ejs", {
        roles
    })
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    //get user by id
    const user = await getUserById(id);
    return res.render("view-user.ejs", {
        id: id,
        user: user
        
    })
 }

 const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullName } = req.body;
    //update user by id
     await UpdateUserById(id, email, address, fullName);
    return res.redirect("/");
 }

const postCreateUser = async (req: Request, res: Response) => {
    const {fullName, username,phone ,role, address} = req.body;
    
//     //handle create user
//    const a = await handleCreateUser(fullName, email, address);

    return res.redirect("/")
}

const postDeleteUser = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    await handleDeleteUser(id);

     return res.redirect("/")
 }

 


export {getHomePage, getCreateUserPage, postCreateUser, getViewUser,postUpdateUser ,postDeleteUser}