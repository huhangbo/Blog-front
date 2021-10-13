import Router from "next/router";
import styles from "./HomeItem.module.css"

export default function HomeItem (props) {
    const article = props.article
    const title = props.title? props.title : ""
    return (
        <div className={styles.item}>
            <h4 className={styles.title}
                onClick={() => Router.push(`/article/${article._id}`)}>
                {article.title}
            </h4>
            <div className={`iconfont icon-tag ${styles.tag} ${title === "tag" ? styles.hide : ''}`}>
                {
                    article.tag.map(item => {
                        return (
                            <span key = {item} style={{color: item.color}}
                                  onClick={() => Router.push(`/tag/${item}`)}
                            >
                                {item}
                            </span>
                        )
                    })
                }
            </div>
            <div className={styles.description} onClick={() => Router.push(`/article/${article._id}`)}>
                {article.description}
            </div>
            <span className={`${styles.time} iconfont icon-time`}>{article.publish_time}</span>
            <span className={`${styles.category} ${title === "category" ? styles.hide : ''} iconfont icon-category`}  onClick={() => Router.push(`/category/${article.category}`)}>{article.category}</span>
        </div>
    )
}
