import styles from "./TagAside.module.css"
import Router from "next/router";

export default function TagAside (props) {
    const {tag, selectedId, changeSelectedId} = props
    function switchTag (id) {
        if (props.selectedId) {
            changeSelectedId(id)
            return Router.replace(`/tag/${id}`)
        }
        return Router.push(`/tag/${id}`)
    }
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
                            <div className={`${styles.item} ${item == selectedId ? styles.selected : ''}`}
                                 key={item} onClick={() => {switchTag(item)}}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
