import styles from "./CategoryAside.module.css"
import Router from "next/router";

export default function CategoryAside (props) {
    const {category, selectedId, changeSelectedId} = props
    function switchCategory (id) {
        if (props.selectedId) {
            changeSelectedId(id)
            return Router.replace(`/category/${id}`)
        }
        return Router.push(`/category/${id}`)
    }
    return (
        <div className={styles.aside}>
            <div className={styles.title}>
                <i className="iconfont icon-category_find_icon"></i>
                <span>Category</span>
            </div>
            {
                category.map(item => {
                    return (
                        <div className={`${styles.item} ${item.title == selectedId ? styles.selected : ""}`} key={item.title}
                             onClick={()=>{switchCategory(item.title)}}>
                            <span className={styles.itemTitle}>{item.title}</span>
                            <div className={styles.amount}>
                                {item.amount}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
