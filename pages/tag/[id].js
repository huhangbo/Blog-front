import {useRouter} from "next/router";
import Head from "next/head";
import React, {useState} from "react";
import styles from "./tag.module.css"
import TagAsideContainer from "../../components/TagAside/container";
import HeaderContainer from "../../components/Header/container";
import HomeContent from "../../components/HomeContent/HomeContent";
import Footer from "../../components/Footer/Footer";


export default function Tag() {
    const {id} = useRouter().query
    const [selectedId, setSelectedId] = useState(id)
    function changeSelectedId (selectedId) {
        setSelectedId(selectedId)
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="http://at.alicdn.com/t/font_2714836_00o44fd31dzwg.css"/>
                <title>Tag</title>
            </Head>
            <HeaderContainer/>
            <div className={styles.box}>
                <div className={styles.nav}>
                    <TagAsideContainer selectedId={selectedId} changeSelectedId={changeSelectedId}/>
                </div>
                <div className={styles.content}>
                    <HomeContent title="tag" selectedId={selectedId}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps (context) {
    const {id} = context.query
    return {
        props: {
            id
        }
    }
}
