import styles from "./CategoryAside.module.css"
import Router from "next/router";

export default function CategoryAside (props) {
    const {category, selectedId, changeSelectedId} = props
    console.log(category)
    return (
        <div className={styles.aside}>
            <div className={styles.title}>
                <i className="iconfont icon-category_find_icon"></i>
                <span>Category</span>
            </div>
            {
                category.map(item => {
                    return (
                        <div className={`${styles.item} ${item.category_id == selectedId ? styles.selected : ""}`} key={item.category_id}
                             onClick={()=>{
                                 if (props.selectedId) {
                                     changeSelectedId(item.category_id)
                                     return Router.replace(`/category/${item.category_id}`)
                                 }
                                 return Router.push(`/category/${item.category_id}`)
                             }}>
                            <span>{item.title}</span>
                            <div className={styles.img}>
                                <img src={item.icon}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
