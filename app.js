import express from 'express';
import session from "express-session";
import cors from 'cors';
import mongoose from 'mongoose';
import UserController from './controllers/users-controller.js';
import AuthController from './controllers/auth-controller.js';
import BillingController from './controllers/billing-controller.js';
import MovieController from './controllers/movie-controller.js';


const CONNECTION_STRING = 'mongodb+srv://sayalioak1110:2KcBG9eaaCmRs76I@cluster0.uc5bfg5.mongodb.net/Zinema?retryWrites=true&w=majority'//'mongodb://127.0.0.1:27017/zinema' 
mongoose.connect(CONNECTION_STRING);
// app.use(express.urlencoded({ extended: true }));
const app = express()
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
    // store: new session.MemoryStore(),
  })
);

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
})
)

UserController(app);
MovieController(app);
BillingController(app);
AuthController(app);
app.listen(process.env.PORT || 4000) 
