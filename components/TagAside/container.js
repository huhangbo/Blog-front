import {useEffect, useState} from "react";
import {request} from "../../utils/request";
import TagAside from "./TagAside";

export default function TagAsideContainer (props) {
    const {selectedId, changeSelectedId} = props
    const [tag, setTag] = useState([])
    useEffect( () => {
        (async function (){
            const result = await request('get', '/tag')
            setTag(result)
        })()
    }, [])
    return (
        <>
            <TagAside tag = {tag} selectedId={selectedId} changeSelectedId={changeSelectedId}/>
        </>
    )
}
