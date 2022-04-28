import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import 'express-async-errors';
import morgan from "morgan"

//db and authenticateUser
import connectDB from "./db/connect.js";

//router
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

if(process.env.NODE_ENV !== "production"){
  app.use(morgan())
}

app.use(express.json());

app.get('/',(req, res)=>{
  res.json({msg:"welcome"})
})
app.get('/home',(req, res)=>{
  res.json({msg:"hello guys"})
})
app.use("/auth", authRouter);
app.use("/tasks", taskRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
