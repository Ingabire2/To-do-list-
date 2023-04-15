import Router from "express";
import userRouter from "./user";
import toDoItemsRouter from "./items"; 

const router = Router();

router.use ('/user',userRouter);
router.use ('/toDoItems',toDoItemsRouter);


export default router