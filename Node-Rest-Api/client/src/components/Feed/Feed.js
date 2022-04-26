import { useState, useEffect,useContext } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import { axiosInstance } from "../../config";
import { AuthContext } from "../../Context/AuthContext";
export default function Feed({username}) {
  const {user} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);
  console.log(user);
  useEffect(() => {
    username
    ? axiosInstance.get(`/posts/profile/${username}`).then((res) => {
      setPosts(res.data);
    }) 
    : axiosInstance.get(`/posts/timeline/${user._id}`).then((res) => {
      setPosts(res.data);
    });
   
  }, [username,user._id]);
  return (
    <div className={styles.feedContainer}>
      <div className={styles.feedWrapper}>
        <Share />
        {posts.map((data) => {
          return (<Post key={data._id} data={data} />);
        })}
      </div>
    </div>
  );
}
