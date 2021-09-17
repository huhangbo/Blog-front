import React, {useContext} from "react";

import Router from "next/router";
import styles from "./HeaderBar.module.css"
import Author from "../Author/Author";
import {InfoContext} from "../../pages/_app";


export default function HeaderBar(props) {
    const {social, author} = useContext(InfoContext)
    const {menu} = props
    const {isHide} = props
    return (
        <div className={`${styles.header} ${styles[isHide]}`}>
            <Author social={social} author={author}/>
            <ul className={styles.menus}>
            {
                menu.map((item) =>{
                    return (
                        <li className={styles.item} key={item.title} onClick={() => Router.push(item.link)}>
                            <i className={`iconfont ${item.icon}`}></i>
                            <span>{item.title}</span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
