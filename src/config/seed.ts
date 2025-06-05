import { prisma } from "config/client";
import { loadavg } from "node:os";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();

    if (countUser === 0) {
        await prisma.user.createMany({
        data: [
            {
                username: "vohongphat@gmail.com",
                password: "123",
                accountType: "SYSTEM"
            },
            {
                username: "subin@gmail.com",
                password: "1234",
                accountType: "SYSTEM"
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