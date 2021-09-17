import React, {useState} from "react";
import Router from "next/router";
import styles from "./Header.module.css"

export default function  Header (props) {
    const {menu, getHide} = props
    const [focused,setSearchFocused] = useState({search: "", menus: ""})
    const setSearchFocus = () => {
        focused.search === ""?
            setSearchFocused({search: "searchFocused", menus: "menusHidden"}):
            setSearchFocused({search: "", menus: ""})
    }
    return (
        <div className={styles.center}>
        <nav>
            <div className={styles.list} onClick={()=> {
                getHide()
            }}>
                <i className={"iconfont icon-list "+ styles.listIcon}></i>
            </div>
            <div className={styles.name} onClick={() => Router.push('/')}>浅航博懿</div>
            <div className={styles.box}>
                <div className={styles.search}>
                    <label htmlFor="search"><i className={"iconfont icon-search"}></i></label>
                    <input  id="search" className={styles[focused.search]} onFocus={setSearchFocus} onBlur={setSearchFocus}/>
                </div>
                <ul className={styles.menus+ " " +styles[focused.menus]}>
                    {
                        menu.map((item) =>{
                            return (
                                <li className={styles.item} key={item.title} onClick={() => Router.push(item.url)}>
                                    <i className={"iconfont "+item.icon}></i>
                                    <span className={styles.itemTitle}>{item.title}</span>
                                    {item.children && <>
                                    <i className={`iconfont icon-down ${styles.down}`}></i>
                                    <div className={styles.hoverBar}>
                                        {item.children.map(child =>
                                            <span key={child.title} onClick={()=> Router.push(`${item.url}/${child.category_id || child.tag_id}`)}>
                                                {child.title}
                                            </span>)
                                        }
                                    </div>
                                    </>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
        </div>
    )
}
