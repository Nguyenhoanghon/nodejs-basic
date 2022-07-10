import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();
const initWebRouter = (app) => {
    //Hàm gọi Home page
    router.get('/', homeController.getHomepage);
    //Hàm gọi trang About
    // router.get('/about', homeController.getAboutPage)
    return app.use('/', router)
}

export default initWebRouter;