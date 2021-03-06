import styles from "./Author.module.css"



export  default  function Author (props) {
    const {author} = props
    return (
        <div className={styles.info}>
            <div className={styles.avatar}>
                <img  src='https://moreover-1305054989.cos.ap-nanjing.myqcloud.com/avatar/555.jpg'/>
            </div>
            <div className={styles.name}>{author.name}</div>
            <div className={styles.tag}>{author.description}</div>
            <hr className={`${styles.line} iconfont icon-plane`}/>
            <div className={styles.link}>
                {
                    author.social.map(item => {
                        return(
                            <div className={`${styles.item} ${styles[item.title]}`} key={item.title} >
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <i className={`iconfont ${item.icon}`}></i>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
