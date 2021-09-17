import React from 'react'
import HeaderContainer from "../components/Header/container";
import HomeContent from "../components/HomeContent/HomeContent";
import HomeAside from "../components/HomeAside/HomeAside";
import styles from  "./index.module.css"
import Footer from "../components/Footer/Footer";
import MyHead from "../components/MyHead/MyHead";

export default function Home() {
  return (
      <>
          <MyHead title={"浅航博懿"}/>
          <HeaderContainer/>
          <div className={styles.box}>
              <div className={styles.content}>
              <HomeContent/>
              </div>
              <div  className={styles.aside}>
              <HomeAside/>
              </div>
          </div>
          <Footer/>
      </>
  )
}
