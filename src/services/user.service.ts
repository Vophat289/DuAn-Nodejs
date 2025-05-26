import getConnection from "config/database";
import { PrismaClient } from "@prisma/client"; 
import { prisma } from "config/client";
import { name } from "ejs";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {

        //insert into database
       
        
        const newUser = await prisma.user.create({
          data: {
            fullName: fullName,
            username: email,
            address: address,
            password: "",
            accountType: ""
          }
        })
        return newUser;
    }

const getAllUsers = async () => {
   const users = await prisma.user.findMany()
    return users;
}

const getUserById = async (id: string) => {    
  const user = await prisma.user.findUnique({where: {id: +id}})
  return user;
}

const UpdateUserById = async (id: string, email: string, address:string, fullName:string) => {    
  const updateUser = await prisma.user.update({
    where: {id: +id},
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: "",
      accountType: ""
    }
  })
  return updateUser;
}


const handleDeleteUser = async (id: string) => {
   const result = await prisma.user.delete({
      where: {id: +id}
    })
    return result;
}


    export {handleCreateUser, getAllUsers,getUserById ,handleDeleteUser, UpdateUserById }