
import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constan";
import bcrypt from 'bcrypt';
const saltRounds = 10;

const hashPass = async (plainText: string) => {
  return await bcrypt.hash(plainText, saltRounds) 
}
const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string,
    avatar: string,
    phone: string
  ) => {
        const defaultpass = await hashPass("123456")

        const newUser = await prisma.user.create({
          data: {
            fullName: fullName,
            username: email,
            address: address,
            password: defaultpass,
            accountType: ACCOUNT_TYPE.SYSTEM,
            avatar: avatar,
            phone: phone
          }
        })
        return newUser;
    }

const getAllUsers = async () => {
   const users = await prisma.user.findMany()
    return users;
}

const getAllRoles = async () => {
   const roles = await prisma.role.findMany()
    return roles;
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


    export {handleCreateUser, getAllUsers,getUserById ,handleDeleteUser, UpdateUserById,
      getAllRoles, hashPass
     }