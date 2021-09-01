import React from "react";
import AuthorContainer from "../Author/container";
import Router from "next/router";
import styles from "./HeaderBar.module.css"


export default function HeaderBar(props) {
    const menu = props.menu
    const {isHide} = props
    return (
        <div className={`${styles.header} ${styles[isHide]}`}>
            <AuthorContainer/>
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
