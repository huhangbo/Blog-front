import {useEffect, useState} from "react";
import styles from "./Pagination.module.css"


export default function Pagination (props){
    const pageSizeList = [5, 10, 20]
    const {page, pageAmount, changePage} = props
    const [pageArray, setPageArray] = useState([])
    useEffect(() => {
        let arrTmp = []
        if(pageAmount.totalPage > 5 + 2) {
            if(page.currentPage - 1 <= 3) {
                arrTmp = [2, 3, 4, 5, 6, '...']
            } else if(pageAmount.totalPage - page.currentPage <= 3) {
                arrTmp = ['...', pageAmount.totalPage - 5, pageAmount.totalPage - 4, pageAmount.totalPage - 3, pageAmount.totalPage - 2, pageAmount.totalPage - 1]
            } else {
                arrTmp = ['...', page.currentPage - 2, page.currentPage - 1, page.currentPage, page.currentPage + 1, page.currentPage + 2, '...']
            }
            arrTmp = [1].concat(arrTmp,[pageAmount.totalPage])
        } else {
            for(let i = 1; i <= pageAmount.totalPage; i++){
                arrTmp.push(i)
            }
        }
        setPageArray(arrTmp)
    },[page, pageAmount])
    function limitChange (pageNum) {
        if(pageNum < 1) return 1
        else if(pageNum > pageAmount.totalPage) return pageAmount.totalPage
        else return pageNum
    }
    return (
        <div className={styles.pagination}>
            <span className={`${styles.pre} ${page.currentPage === 1 ? styles.limit : ""}`}
                    onClick={() => {
                        if(page.currentPage === 1) return
                        changePage({...page, currentPage: page.currentPage - 1})
                    }}
                >Pre
            </span>
            {
                pageArray.map((item, index) => {
                    if(item === '...'){
                        if(index === 1) {
                            return (
                                <span key="leftEllipsis"
                                      onClick={() => changePage({...page, currentPage: limitChange(page.currentPage - 5)})}>
                                    {item}
                                </span>
                            )
                        } else {
                            return (
                                <span key="rightEllipsis"
                                      onClick={() => changePage({...page, currentPage: limitChange(page.currentPage + 5)})}>
                                    {item}
                                </span>
                            )
                        }
                    }
                    return (
                        <span className={`${styles.item} ${page.currentPage === item ? styles.active : ''}`} key={item} onClick={() => changePage({...page, currentPage: item})}>{item}</span>
                    )
                })
            }
            <span className={`${styles.next} ${page.currentPage >= pageAmount.totalPage ? styles.limit : ""}`}
                    onClick={() => {
                        if(page.currentPage === pageAmount.totalPage) return
                        changePage({...page, currentPage: page.currentPage + 1})
                    }}
                >Next
            </span>
            <select className={styles.select} onChange={() => {changePage({...page, pageSize: event.target.value})}}>
                {
                    pageSizeList.map(item => {
                        return (
                            <option key = {item} value={item}>{`${item}条/页`}</option>
                        )
                    })
                }
            </select>
            <span>total: {pageAmount.articleAmount}</span>
        </div>
    )
}
