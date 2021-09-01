import {useEffect, useState} from "react";
import {request} from "../../utils/request";
import CategoryAside from "./CategoryAside";

export default  function CategoryAsideContainer (props) {
    const {selectedId, changeSelectedId} = props
    const [category, setCategory] = useState([])
    useEffect(async ()=>{
        const result = await request('get','/category')
        setCategory(result)
    },[])
    return (
        <>
            <CategoryAside category = {category} selectedId={selectedId} changeSelectedId={changeSelectedId}/>
        </>
    )
}
