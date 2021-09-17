import {useContext} from "react";
import TagAside from "./TagAside";
import {InfoContext} from "../../pages/_app";

export default function TagAsideContainer (props) {
    const {selectedId, changeSelectedId} = props
    const {tag} = useContext(InfoContext)
    return (
        <>
            <TagAside tag = {tag} selectedId={selectedId} changeSelectedId={changeSelectedId}/>
        </>
    )
}
