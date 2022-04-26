import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <NavLink to="/">
          <span className={styles.logo}>
            <h3>Holla,</h3>
            <h5>{user.username}</h5>
          </span>
        </NavLink>
      </div>
      <div className={styles.navbarMiddle}>
        <div className={styles.searchBar}>
          <SearchIcon className={styles.searchIcon} />
          <input placeholder="Search Friends,Posts.." type="text" />
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.navbarLinks}>
          <NavLink to="/">
            <span className={styles.navbarLink}>Home</span>
          </NavLink>
          <NavLink to={`/profile/${user.username}`}>
            <span className={styles.navbarLink}>Profile</span>
          </NavLink>
        </div>

        <div className={styles.navbarIcons}>
          <div className={styles.navbarIconsItem}>
            <PersonIcon />
            <span className={styles.navbarIconBadge}>2</span>
          </div>
      {/*     <div className={styles.navbarIconsItem}>
            <ChatBubbleIcon />
            <span className={styles.navbarIconBadge}>2</span>
          </div> */}
          <div className={styles.navbarIconsItem}>
            <NotificationsActiveIcon />
            <span className={styles.navbarIconBadge}>2</span>
          </div>
          <NavLink to={`/profile/${user.username}`}>
            <div className={styles.navbarProfile}>
              <img
                className={styles.navbarImg}
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : "/assets/person/noAvatar.png"
                }
                alt=""
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
