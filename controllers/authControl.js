import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError,UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all the fields");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        designation: user.designation,
      },
      token,
      designation: user.designation,
    });
};
const login = async (req, res) => {
  const {email,password} = req.body
  if(!email ||!password){
    throw new BadRequestError("please all the fields")
  }
  const user = await User.findOne({email}).select('+password')
  if(!user){
    throw new UnAuthenticatedError("Invalid credentials")
  }
  console.log(user)
  const isPasswordCorrect = await user.comparePassword(password)
  if(!isPasswordCorrect){
    throw new UnAuthenticatedError("Invalid credentials")
  }
  const token = user.createJWT()
  user.password=undefined;
  res.status(StatusCodes.OK).json({user,token,designation:user.designation})
};
const updateUser = async (req, res) => {
  res.send("updated user");
};

export { register, login, updateUser };
