const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");

//Routes
const usersRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const postsRoute = require("./Routes/posts");

dotenv.config();
app.use(cors());

const url = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("coonected");
});

//Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"public/images/");
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({dest:'public/images/',storage:storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("file uploaded");
  } catch (err) {
    console.log(err);
  }
});

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.use(express.static(path.join(__dirname, "client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
}); 

app.listen(port || 7000, () => {
  console.log("BackEnd server is running Sir..");
});
