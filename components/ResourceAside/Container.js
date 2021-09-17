import {useContext} from "react";
import ResourceAside from "./ResourceAside";
import {InfoContext} from "../../pages/_app";

export default function  ResourceAsideContainer () {
    const {resourceCategory} = useContext(InfoContext)
    return (
        <>
            <ResourceAside resourceCategory = {resourceCategory}/>
        </>
    )
}
