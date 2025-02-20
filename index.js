import express from "express";
const app = express();
import "dotenv/config";
import dbConnect from "./config/db.js";
import session from "express-session";
import userRoutes from "./routes/user.js"

const PORT = process.env.PORT;
app.use(express.json())

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:400000}
}))

app.use("/api/user",userRoutes)

app.get("/", (req, res) => {
  res.send("hello");
});

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}).catch((err)=>{
    console.log(err.message)
})
