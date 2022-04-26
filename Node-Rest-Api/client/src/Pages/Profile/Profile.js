import { useState, useEffect } from "react";
import Feed from "../../components/Feed/Feed";
import LeftBar from "../../components/LeftBar/LeftBar";
import Navbar from "../../components/Navbar/Navbar";
import RightBar from "../../components/RightBar/RightBar";
import styles from "./Profile.module.css";
import { Users } from "../../dummyData";
import { axiosInstance } from "../../config";
import { useParams } from "react-router";
export default function Profile() {
  const [user, setUser] = useState({});
  const params = useParams(); 
  useEffect(() => {
    axiosInstance.get(`/users?username=${params.username}`).then((res) => {
      setUser(res.data);
    });
  }, [params.username]);

  return (
    <div>
      <Navbar />
      <div className={styles.profileContainer}>
        <LeftBar users={Users} />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileImages}>
              <img
                className={styles.profileCoverImg}
                src={user.CoverPicture?user.CoverPicture:"/assets/person/noCover.png"}
                alt=""
              />
              <img
                className={styles.profileUserImg}
                src={user.profilePicture?user.profilePicture:"/assets/person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className={styles.profileInfo}>
          <h3 className={styles.profileInfoName}>{user.username}</h3>
           <p className={styles.profileInfoDesc}>{user.description}</p>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed username={params.username}/>
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
