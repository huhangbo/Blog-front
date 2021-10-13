import {useRouter} from "next/router";
import React, {useState} from "react";
import styles from "./tag.module.css"
import TagAsideContainer from "../../components/TagAside/container";
import HeaderContainer from "../../components/Header/container";
import HomeContent from "../../components/HomeContent/HomeContent";
import Footer from "../../components/Footer/Footer";
import MyHead from "../../components/MyHead/MyHead";


export default function Tag({id}) {
    const [selectedId, setSelectedId] = useState(id)
    function changeSelectedId (selectedId) {
        setSelectedId(selectedId)
    }
    return (
        <>
            <MyHead title={"tag"}/>
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
    return {props: {id}}
}
