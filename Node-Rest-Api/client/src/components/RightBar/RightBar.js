import styles from "./RightBar.module.css";
import CakeIcon from "@mui/icons-material/Cake";
export default function RightBar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.birthdayContainer}>
          <CakeIcon htmlColor="Hotpink" className={styles.birthdayImg} />
          <span className={styles.birthdayText}>
            <b>Tracy Mcgrady</b> and <b>3 others</b> have birthdays today
          </span>
        </div>
        <div className={styles.rightBarAd}>
          <img className={styles.rightBarAdImg} src="/assets/ad.png" alt="" />
        </div>
        <h4 className={styles.rightBarOnline}>Online Friends</h4>
        <ul className={styles.rightBarFriendsList}>
     {/*     {user.map((user) => {
             return (
              <li key={user.id} className={styles.rightBarFriend}>
                <div className={styles.rightBarImgContainer}>
                  <img
                    className={styles.rightBarProfileImg}
                    src={user.profilePicture}
                    alt=""
                  />
                  <span className={styles.rightBarOnlineTick}></span>
                </div>
                <span className={styles.rightBarFriendName}>
                  {user.username}
                </span>
              </li>
            ); 
          })} */}
                  </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>User Information</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City</span>
            <span className={styles.rightbarInfoValue}>{user.city}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From</span>
            <span className={styles.rightbarInfoValue}>{user.from}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship Status</span>
            <span className={styles.rightbarInfoValue}>
              {user.relationship === 1
                ? "Married"
                : user.relationship === 2
                ? "Single"
                : user.relationship === 3
                ? "Other"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className={styles.rightbarTitle}>User Friends</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <img
              className={styles.rightbarFollowingImg}
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className={styles.rightbarFollowingName}>ads sa</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              className={styles.rightbarFollowingImg}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.rightbarFollowingName}>ads sa</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              className={styles.rightbarFollowingImg}
              src="/assets/person/3.jpg"
              alt=""
            />
            <span className={styles.rightbarFollowingName}>ads sa</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img
              className={styles.rightbarFollowingImg}
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className={styles.rightbarFollowingName}>ads sa</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.rightBarContainer}>
      <div className={styles.rightBarWrapper}>
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
