import React, {useEffect, useState} from "react"
import {request} from "../../utils/request";
import HomeList from "./HomeList";
import Pagination from "../Pagination/Pagination";

export default function HomeContent (props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState({currentPage: 1, pageSize: 5})
    const [pageAmount, setPageAmount] = useState({})
    useEffect( () => {
        (async function () {
            let url = ''
            if(props.title) {
                const {title, selectedId} = props
                url = `${title}/${selectedId}/${page.currentPage}/${page.pageSize}`

            } else {
                url = `article/${page.currentPage}/${page.pageSize}`
            }
            const result = await request('get', url)
            setArticles(result.articles)
            setPageAmount({articleAmount: result.page.articleAmount, totalPage: result.page.totalPage})
        }) ()
    }, [page,props])
    const changePage = (page) => setPage(page)
    return (
        <>
            <HomeList articles = {articles} title={props.title}/>
            <Pagination page = {page} pageAmount = {pageAmount} changePage = {changePage}/>
        </>
    )
}
