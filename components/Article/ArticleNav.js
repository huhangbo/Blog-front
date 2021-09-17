import MarkNav from "markdown-navbar";
import 'markdown-navbar/dist/navbar.css';
import styles from "./ArticleNav.module.css"


export default function ArticleNav (props) {
    const {content, a} = props
    return (
        <div className={styles.category}>
            <div className={styles.title}>目录</div>
            <MarkNav source={content} headingTopOffset={80} ordered={false}/>
        </div>
    )
}
