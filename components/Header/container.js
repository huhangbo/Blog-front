import React, {useEffect, useState} from "react";
import Header from "./Header";
import {request} from "../../utils/request";
import HeaderBar from "./HeaderBar";
import HeaderMask from "./HeaderMask";

export default function HeaderContainer () {
    const [menu, setMenu] = useState([])
    const [isHide, setHide] = useState("")
    useEffect(async () => {
        const menuResult = await request('get', '/menu')
        setMenu(menuResult)
    },[])
    const getHide = () => {
        isHide === "" ? setHide("hide") : setHide("")
    }
    return (
        <header>
            <Header menu = {menu} getHide = {getHide}/>
            <HeaderBar menu = {menu} isHide = {isHide}/>
            <HeaderMask isHide = {isHide} getHide = {getHide}/>
        </header>
    )
}
