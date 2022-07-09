import express from "express";
import homeController from '../controller/homecontroller'
let router = express.Router();
const initWebRouter = (app) => {
    //Hàm gọi Home page
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res) => {
        res.send(`Gọi trang con!`)
    })
    return app.use('/', router)
}

export default initWebRouter;