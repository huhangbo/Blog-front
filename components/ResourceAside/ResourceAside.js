import styles from "./ResourceAside.module.css"


export default function ResourceAside (props) {
    const {resourceCategory} = props
    return (
        <div className={styles.aside}>
            <div className={styles.title}>
                <i className="iconfont icon-resources"></i>
                <span>Resource</span>
            </div>
            <div>
                {
                    resourceCategory.map(item => {
                        return (
                            <div className={styles.item} key={item.resource_category_id}>
                                <span>{item.title}</span>
                                <span className={styles.amount}>{item.amount}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
