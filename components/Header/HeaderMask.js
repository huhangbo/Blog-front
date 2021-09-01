import styles from "./HeaderMask.module.css"


export default function HeaderMask(props) {
    const {isHide, getHide} = props
    return (
        <div className={`${styles.mask} ${styles[isHide]}`} onClick={() => {getHide()}}>
        </div>
    )
}
