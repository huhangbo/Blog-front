import styles from "./ResourceAside.module.css"


export default function ResourceAside () {
    return (
        <div className={styles.aside}>
            <div className={styles.title}>
                <i className="iconfont icon-resources"></i>
                <span>Resource</span>
            </div>
        </div>
    )
}
