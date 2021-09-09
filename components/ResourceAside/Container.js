import {useEffect, useState} from "react";
import {request} from "../../utils/request";
import ResourceAside from "./ResourceAside";

export default function  ResourceAsideContainer () {
    const [resourceCategory, setCategory] = useState([])
    useEffect( () => {
        (async function () {
            const result = await request('get', '/resource/category')
            setCategory(result)
        }) ()
    }, [])
    return (
        <>
            <ResourceAside resourceCategory = {resourceCategory}/>
        </>
    )
}
