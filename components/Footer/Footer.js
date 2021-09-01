import styles from "./Footer.module.css"

export default function Footer (){
    return (
        <footer className={styles.footer}>
            <div>Copyright © 2020-{new Date().getFullYear()} 浅航博懿</div>
            <div className={styles.icp}>津ICP备2020008035号</div>
        </footer>
    )
}
