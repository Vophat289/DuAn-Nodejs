import express, {Express} from 'express';
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser} from 'controllers/user.controller';
import { getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage } from 'controllers/admin/dashboard.controller';
import fileUploadMiddleware from 'src/middleware/multer';

const router = express.Router();
const webRoutes = (app: Express) =>{

    router.get("/", getHomePage);
    
   
    router.get("/handle-view-user/:id", getViewUser);
    router.post("/handle-update-user", postUpdateUser);
    
    router.post("/handle-delete-user/:id", postDeleteUser);

    //admin
    router.get("/admin", getDashboardPage);
    router.get("/admin/user", getAdminUserPage);
    router.get("/admin/product", getAdminProductPage);
    router.get("/admin/order", getAdminOrderPage);

    router.get("/admin/create-user", getCreateUserPage);
    router.post("/admin/handle-create-user", fileUploadMiddleware("avatar"), postCreateUser);

    app.use("/", router);
}

export default webRoutes;
