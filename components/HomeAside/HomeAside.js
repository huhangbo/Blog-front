import React, {useContext} from "react";
import Author from "../Author/Author";
import CategoryAsideContainer from "../CategoryAside/Container";
import TagAsideContainer from "../TagAside/container";
import {InfoContext} from "../../pages/_app";
import ResourceAside from "../ResourceAside/ResourceAside";

export default function HomeAside() {
    const {author, social} = useContext(InfoContext)
    return (
        <>
            <Author author={author} social={social}/>
            <div style={{position: "sticky", top: "3.6rem",}}>
            <CategoryAsideContainer/>
            <TagAsideContainer/>
            <ResourceAside/>
            </div>
        </>
    )
}
