import { Router } from 'express';
import userController from '../controllers/userControllers';
import { checkUser, loginUser } from "../middlewares/checkUserExist";
import { verifyUserToken } from "../middlewares/verifyToken";
import verifyAccess from '../middlewares/verifyAccess';



const route = Router();
route
.route("/")
.post(checkUser,userController.signup)
.get(userController.getAllUsers);


route.post("/login",loginUser);
route.use(verifyUserToken);
route.use(verifyAccess("Admin"));
route
.route("/:id")
.get(userController.getOneUser)
.patch(userController.updateUser)
.delete( userController.deleteUser);



export default route;