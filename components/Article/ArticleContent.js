import marked from "marked";
import highlight from "highlight.js";
import {useEffect} from "react";
import styles from "./ArticleContent.module.css"
import Router from "next/router";
import "github-markdown-css"

export default function ArticleContent(props) {
    const {article, a} = props

        useEffect(() => {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false,
                highlight: function(code) {
                    return highlight.highlightAuto(code).value;
                },
            })
        }, [])
    return (
        <>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.center}>
                <span className={`${styles.time} iconfont icon-time`}>{article.publish_time}</span>
                <span className={`${styles.category} iconfont icon-category`}  onClick={() => Router.push(`/category/${article.category}`)}>{article.category}</span>
            </div>
            <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: marked(a)}}
            />
        </>
    )
}
