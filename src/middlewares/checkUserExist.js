import userModel from "../models/userModel";
import { hashPassword, isPasswordMatching } from "../utils/hashPassword";
 import Response from "../utils/response";
 import status from "http-status";
 import { generateToken } from "../utils/token";

 export const checkUser = async (req,res,next) =>{
    let {username,password} = req.body;
    const user = await userModel.findOne({username});
    if (!user) {
        req.body.password =hashPassword(password);
        return next();
    }
    return Response.errorMessage(res, "user already exist", status.CONFLICT);

 };

 export const loginUser = async (req,res) => {
    let { username,password} = req.body;
    const user = await userModel.findOne({username});
    if (!user) {
        return Response.errorMessage(
            res,
            "user does not exist",
            status.NOT_FOUND
        );
    }
    if (isPasswordMatching(password, user.password)) {
        user.password = null;
        const token = generateToken({ user});
        return Response.successMessage(
            res,
            "successfully logged in",
            { user, token},
            status.OK
        );
    }
    return Response.errorMessage(res, "Invalid password", status.BAD_REQUEST);
 };