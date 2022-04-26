const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

//Register

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  newUser
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

//Login


router.post('/login',async (req,res)=>{
   
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json('user not found');
        //user && res.status(200).json("user found");


        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json('wrong pass')
        validPassword && res.status(200).json(user)

    }catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;
