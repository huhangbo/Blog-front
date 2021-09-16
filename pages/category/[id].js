import Head from "next/head";
import React, {useEffect, useState} from "react";
import HomeContent from "../../components/HomeContent/HomeContent";
import HeaderContainer from "../../components/Header/container";
import {useRouter} from "next/router";
import styles from "./category.module.css"
import CategoryAsideContainer from "../../components/CategoryAside/Container";
import Footer from "../../components/Footer/Footer";


export default function Category ({id}) {
    // const {id} = useRouter().query
    const [selectedId, setSelectedId] = useState(id)
    function changeSelectedId (selectedId) {
        setSelectedId(selectedId)
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="http://at.alicdn.com/t/font_2714836_00o44fd31dzwg.css"/>
                <title>Category</title>
            </Head>
            <HeaderContainer/>
            <div className={styles.box}>
                <div className={styles.content}>
                    <HomeContent title={"category"} selectedId={selectedId}/>
                </div>
                <div className={styles.nav}>
                    <CategoryAsideContainer selectedId={selectedId} changeSelectedId={changeSelectedId}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps (context) {
    console.log(context)
    const {id} = context.query
    return {
        props: {
            id
        }
    }
}
