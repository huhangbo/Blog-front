import {useContext, useEffect, useState} from "react";
import {request} from "../../utils/request";
import CategoryAside from "./CategoryAside";
import {InfoContext} from "../../pages/_app";

export default  function CategoryAsideContainer (props) {
    const {category} = useContext(InfoContext)
    const {selectedId, changeSelectedId} = props
    return (
        <>
            <CategoryAside category = {category} selectedId={selectedId} changeSelectedId={changeSelectedId}/>
        </>
    )
}
