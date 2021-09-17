import React, {useContext} from "react";
import Author from "../Author/Author";
import CategoryAsideContainer from "../CategoryAside/Container";
import TagAsideContainer from "../TagAside/container";
import ResourceAsideContainer from "../ResourceAside/Container";
import {InfoContext} from "../../pages/_app";

export default function HomeAside() {
    const {author, social} = useContext(InfoContext)
    return (
        <>
            <Author author={author} social={social}/>
            <CategoryAsideContainer/>
            <TagAsideContainer/>
            <ResourceAsideContainer/>
        </>
    )
}
