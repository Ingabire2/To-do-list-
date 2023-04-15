import userModel from "../models/userModel";
import handleCRUD from "../utils/handleCRUD";

 const signup = handleCRUD.createOne(userModel);
 const getOneUser = handleCRUD.getOneById(userModel);
 const getAllUsers = handleCRUD.getAll(userModel);
 const updateUser = handleCRUD.updateOneById(userModel);
 const deleteUser = handleCRUD.deleteOneById(userModel);

 export default {signup,getOneUser,getAllUsers,updateUser,deleteUser}