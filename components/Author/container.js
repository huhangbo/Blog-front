import React, {useEffect, useState} from "react";
import Author from "./Author";
import {request} from "../../utils/request";


export default function AuthorContainer () {
    const [authorInfo, setAuthorInfo] = useState({author: {}, social: []})
    useEffect(async () => {
        const author = await request('get', '/author')
        const social = await request('get','/social')
        setAuthorInfo({
            author: author[0],
            social: social
        })
    },[])
    return (
        <>
            <Author author = {authorInfo.author} social = {authorInfo.social}/>
        </>
    )
}
