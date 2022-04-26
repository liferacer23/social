const { links } = require("express/lib/response");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
      userId:{
            type:String,
            required:true
      },
      description:{
          type:String,
          default:'',
          max:500
      },
      image:{
          type:Array,
          default:[]
      },
      likes:{
          type:Array,
          default:[]
      },
      comments:{
          type:Array,
          default:[]
      },
      share:{
          type:Array,
          default:[]
      },
    },
      { timestamps: true }
    
);

module.exports = mongoose.model("Post", PostSchema);
