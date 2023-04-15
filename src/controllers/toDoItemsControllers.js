import toDoItemsModel from "../models/to-doItemsModel";
import handleCRUD from "../utils/handleCRUD";

 const createtoDoItems = handleCRUD.createOne(toDoItemsModel);
 const getOnetoDoItems = handleCRUD.getOneById(toDoItemsModel);
 const getAlltoDoItems = handleCRUD.getAll(toDoItemsModel);
 const updatetoDoItems = handleCRUD.updateOneById(toDoItemsModel);
 const deletetoDoItems = handleCRUD.deleteOneById(toDoItemsModel);

 export default {createtoDoItems,getOnetoDoItems,getAlltoDoItems,updatetoDoItems,deletetoDoItems}