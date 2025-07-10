import { prisma } from "config/client";
import { loadavg } from "node:os";
import { ACCOUNT_TYPE } from "config/constan";
import { hashPass } from "services/user.service";


const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    const defaultpass = await hashPass ("123456"); 

    if (countUser === 0) {
        await prisma.user.createMany({
        data: [
            {
                fullName: "Admin",
                username: "vohongphat@gmail.com",
                password: defaultpass,
                accountType: ACCOUNT_TYPE.SYSTEM
            },
            {
                fullName: "Subin",
                username: "subin@gmail.com",
                password: defaultpass,
                accountType: ACCOUNT_TYPE.SYSTEM
            } 
        ]
    })
    }else if (countRole === 0) {
        await prisma.role.createMany({
        data: [
            {
                name: "ADMIN",
                description: "Admin đầy đủ quyền"
            },
            {
                name: "USER",
                description: "User thông thường"
            }
        ]
        })
    }else{
        console.log("Bạn đã có dữ liệu ");
        
    }
}

export default initDatabase;