import React from "react";
import AuthorContainer from "../Author/container";
import CategoryAsideContainer from "../CategoryAside/Container";
import TagAsideContainer from "../TagAside/container";
import ResourceAsideContainer from "../ResourceAside/Container";

export default function HomeAside() {
    return (
        <>
            <AuthorContainer/>
            <CategoryAsideContainer/>
            <TagAsideContainer/>
            <ResourceAsideContainer/>
        </>
    )
}
