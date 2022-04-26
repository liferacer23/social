import styles from './LeftBar.module.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ForumIcon from '@mui/icons-material/Forum';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import BackpackIcon from '@mui/icons-material/Backpack';
import {Users} from "../../dummyData";
export default function LeftBar() {
  return (
    <div className={styles.leftBarContainer}>
      <div className={styles.leftWrapper}>
        <ul className={styles.leftBarList}>
            <li className={styles.leftBarListItem}>
              <RssFeedIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Feed</span>
            </li>
            <li className={styles.leftBarListItem}>
              <ForumIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Chat</span>
            </li>
            <li className={styles.leftBarListItem}>
              <OndemandVideoIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Videos</span>
            </li>
            <li className={styles.leftBarListItem}>
              <GroupsIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Groups</span>
            </li>
            <li className={styles.leftBarListItem}>
              <BookmarksIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Bookmarks</span>
            </li>
            <li className={styles.leftBarListItem}>
              <HelpIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Questions</span>
            </li>
            <li className={styles.leftBarListItem}>
              <WorkOutlinedIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Jobs</span>
            </li>
            <li className={styles.leftBarListItem}>
              <EventOutlinedIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Events</span>
            </li>
            <li className={styles.leftBarListItem}>
              <BackpackIcon className={styles.leftBarIcon}/>
              <span className={styles.leftBarListText}>Courses</span>
            </li>
        </ul>
        <button className={styles.leftBarButton}>Show More</button>
        <hr className={styles.leftBarHr}/>
        <ul className={styles.leftBarFriendList}>
          {Users.map((user,index)=>{
            return(
              <li key={index} className={styles.leftBarFriend}>
              <img className={styles.leftBarFriendImg} src={user.profilePicture} alt="" />
              <span className={styles.leftBarFriendName}>{user.username}</span>
            </li>
            )
          })}
  
        </ul>
      </div>
      </div>
  )
}
