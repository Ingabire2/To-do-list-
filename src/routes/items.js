import { Router } from 'express';
import toDoItemsController from '../controllers/toDoItemsControllers';




const route = Router();
route
.route("/")
.get(toDoItemsController.getAlltoDoItems)
.post(toDoItemsController.createtoDoItems);



route
.route("/:id")
.get(toDoItemsController.getOnetoDoItems)
.patch(toDoItemsController.updatetoDoItems)
.delete( toDoItemsController.deletetoDoItems);



export default route;