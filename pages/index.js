import React from 'react'
import Head from 'next/head'
import Header from "../components/Header/Header";
import Author from "../components/Author/Author";
import AuthorContainer from "../components/Author/container";
import HeaderContainer from "../components/Header/container";
import HomeContent from "../components/HomeContent/HomeContent";
import HomeAside from "../components/HomeAside/HomeAside";
import styles from  "./index.module.css"
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
      <>
          <Head>
              <link rel="stylesheet" href="http://at.alicdn.com/t/font_2714836_00o44fd31dzwg.css"/>
              <title>Home</title>
          </Head>
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
