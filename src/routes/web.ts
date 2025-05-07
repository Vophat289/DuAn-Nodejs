import express, {Express} from 'express';
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser} from 'controllers/user.controller';



const router = express.Router();
const webRoutes = (app: Express) =>{

    router.get("/", getHomePage);
    
    router.get("/create-user", getCreateUserPage);
    router.get("/handle-view-user/:id", getViewUser);
    router.post("/handle-update-user", postUpdateUser);
    router.post("/handle-create-user", postCreateUser);
    router.post("/handle-delete-user/:id", postDeleteUser);

    
    
    app.use("/", router);
}

export default webRoutes;
