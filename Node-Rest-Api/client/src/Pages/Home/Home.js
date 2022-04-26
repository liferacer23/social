import React from 'react'
import Feed from '../../components/Feed/Feed';
import LeftBar from '../../components/LeftBar/LeftBar';
import Navbar from '../../components/Navbar/Navbar'
import RightBar from '../../components/RightBar/RightBar';
import styles from './Home.module.css';
import {Users} from "../../dummyData";
export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className={styles.homeContainer}>
      <LeftBar users={Users}/>
      <Feed/>
      <RightBar users={Users}/>
        </div>
    </div>
  )
}
