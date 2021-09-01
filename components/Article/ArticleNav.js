import MarkNav from "markdown-navbar";
import 'markdown-navbar/dist/navbar.css';
import styles from "./ArticleNav.module.css"


export default function ArticleNav (props) {
    const {a} = props
    return (
        <div className={styles.category}>
            <div className={styles.title}>目录</div>
            <MarkNav source={a} headingTopOffset={80} ordered={false}/>
        </div>
    )
}
