import React, {useState} from "react";
import HomeContent from "../../components/HomeContent/HomeContent";
import HeaderContainer from "../../components/Header/container";
import styles from "./category.module.css"
import CategoryAsideContainer from "../../components/CategoryAside/Container";
import Footer from "../../components/Footer/Footer";
import MyHead from "../../components/MyHead/MyHead";



export default function Category ({id}) {
    const [selectedId, setSelectedId] = useState(id)
    function changeSelectedId (selectedId) {
        setSelectedId(selectedId)
    }
    return (
        <>
            <MyHead title={"category"}/>
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
    const {id} = context.query
    return {props: {id}}
}
