import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
}
