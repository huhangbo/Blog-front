import {useContext, useEffect, useState} from "react";
import Header from "./Header";
import {request} from "../../utils/request";
import HeaderBar from "./HeaderBar";
import HeaderMask from "./HeaderMask";
import {InfoContext} from "../../pages/_app";

export default function HeaderContainer () {
    const {author} = useContext(InfoContext)
    const [isHide, setHide] = useState("")
    const getHide = () => {
        isHide === "" ? setHide("hide") : setHide("")
    }
    return (
        <header>
            <Header menu={author.menu} getHide={getHide}/>
            <HeaderBar menu={author.menu} isHide={isHide}/>
            <HeaderMask isHide={isHide} getHide={getHide}/>
        </header>
    )
}
