const router = require("express").Router();
const Post = require("../Models/Post");
const User = require("../Models/User");
//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save({ $push: { image: req.body.image } });
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(202).json("post deleted");
    } else {
      res.status(403).json("You can only delete your own post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//LIKE POST
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(202).json(`${user.username} liked this post`);
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(202).json(`${user.username} unliked this post`);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//UNLIKE POST
/* router.put('/:id/unlike',async(req,res)=>{
   try{
    const post = await Post.findById(req.params.id);
    if(post.likes.includes(req.body.userId)){
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(202).json('You unliked this post')    
    }else{
        res.status(403).json('You dont liked this post')    
    }
  }
   catch(err){
       res.status(500).json(err)
   }
    }) */

//GET TIMELINE POSTS
router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
     currentUser.following.map ((friendId)=> {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //GET USERS POSTS ALL
router.get("/profile/:username", async (req, res) => {
    try {
    const user = await User.findOne({username:req.params.username})
     const posts = await Post.find({userId:user._id})
     res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET A POST

router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
