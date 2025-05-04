import express, {Express} from 'express';

const router = express.Router();
const webRoutes = (app: Express) =>{

    router.get("/", (req, res) => {
        res.render("home.ejs")
    });
    
    router.get("/subin", (req, res) => {
        res.send("Hello Bin!") 
    });
    
    router.get("/abc", (req, res) => {
        res.send("ABC")
    });

    
    app.use("/", router);
}

export default webRoutes;
