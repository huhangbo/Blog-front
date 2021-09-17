import Router from "next/router";
import styles from "./HomeItem.module.css"

export default function HomeItem (props) {
    const article = props.article
    const title = props.title? props.title : ""
    return (
        <div className={styles.item}>
            <h4 className={styles.title}
                onClick={() => Router.push(`/article/${article.article_id}`)}>
                {article.title}
            </h4>
            <div className={`iconfont icon-tag ${styles.tag} ${title === "tag" ? styles.hide : ''}`}>
                {
                    article.tag.map(item => {
                        return (
                            <span key = {item.tag_id}
                                  onClick={() => Router.push(`/tag/${item.tag_id}`)}
                            >
                                {item.tag_title}
                            </span>
                        )
                    })
                }
            </div>
            <div className={styles.description} onClick={() => Router.push(`/article/${article.article_id}`)}>
                {article.description}
            </div>
            <span className={`${styles.time} iconfont icon-time`}>{article.publish_time}</span>
            <span className={`${styles.category} ${title === "category" ? styles.hide : ''} iconfont icon-category`}  onClick={() => Router.push(`/category/${article.category_id}`)}>{article.category_title}</span>
        </div>
    )
}
