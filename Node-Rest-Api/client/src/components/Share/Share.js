import styles from "./Share.module.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MoreIcon from '@mui/icons-material/More';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useRef, useState } from "react";
import { axiosInstance } from "../../config";
export default function Share() {
  const {user} = useContext(AuthContext)
  const description = useRef();
  const [file,setFile] = useState();


  const submitHandler = async (e) => {

    e.preventDefault();

     const newPost ={
       userId:user._id,
       description:description.current.value,
     }
  
    try{
        await axiosInstance.post('/posts',{newPost})
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img className={styles.shareTopImg} src={user.profilePicture?user.profilePicture:"/assets/person/noAvatar.png"} alt="" />
          <input
            className={styles.shareInput}
            placeholder={`Whats on your mind ${user.username}...`}
            type="text"
            ref={description}
          />
        </div>
        <hr className={styles.shareHr} />

        <form onSubmit={submitHandler} className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <label htmlFor="file" className={styles.shareOption}>
              <PermMediaIcon  htmlColor="orange" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
              <input style={{display:"none"}} type="file" id="file" accept =".png, .jpeg, .jpg" onChange={(e)=>{setFile(e.target.file[0])}}/>
            </label>
            <div className={styles.shareOption}>
              <MoreIcon htmlColor="green" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <FmdGoodIcon htmlColor="blue" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotionsIcon htmlColor="gold" className={styles.shareOptionIcon} />
              <span className={styles.shareOptionText}>Mood</span>
            </div>
          </div>
          <button type="submit" className={styles.shareButton}>Share</button>
        </form>
      </div>
    </div>
  );
}
