import styles from "./TagAside.module.css"
import Router from "next/router";

export default function TagAside (props) {
    const {tag, selectedId, changeSelectedId} = props
    console.log(tag)
    return (
        <div className={styles.aside}>
            <div className={styles.title}>
                <i className="iconfont icon-tag"></i>
                <span>Tag</span>
            </div>
            <div className={styles.box}>
                {
                    tag.map(item => {
                        return (
                            <div className={`${styles.item} ${item.tag_id == selectedId ? styles.selected : ''}`}
                                 key={item.tag_id}
                                 onClick={() => {
                                     if (props.selectedId) {
                                         changeSelectedId(item.tag_id)
                                         return Router.replace(`/tag/${item.tag_id}`)
                                     }
                                         return Router.push(`/tag/${item.tag_id}`)
                                 }}>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
