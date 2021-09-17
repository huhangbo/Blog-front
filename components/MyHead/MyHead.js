import Head from "next/head";
import React from "react";

export default function MyHead ({title,content = undefined}) {
    return (
        <Head>
            <link rel="stylesheet" href="http://at.alicdn.com/t/font_2714836_qwu9khahlv.css"/>
            {content}
            <title>{title}</title>
        </Head>
    )
}
