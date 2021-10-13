import HomeItem from "../HomeItem/HomeItem";
import styles from "./HomeList.module.css"
export default function  HomeList (props) {
    const {articles} = props
    return (
        <div className={styles.homeList}>
            {
                articles.map(item => {
                    return (
                        <HomeItem key = {item._id} article = {item} title={props.title}/>
                    )
                })
            }
        </div>
    )
}
