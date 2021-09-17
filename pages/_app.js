import App from "next/app"
import {request} from "../utils/request";
import '../styles/globals.css'
import {createContext} from "react";

export const InfoContext = createContext({})

export default function MyApp(props) {
  const { Component, pageProps,author, menu, social, category, tag, resourceCategory} = props
  console.log("page", Component, pageProps, author)
  return (
      <InfoContext.Provider value={{author, menu, social, category, tag, resourceCategory}}>
        <Component {...pageProps} />
      </InfoContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const menu = await request("get", "/menu")
  const author = await request("get", "/author")
  const social = await request("get", "/social")
  const category = await request('get','/category')
  const tag = await request('get',"/tag")
  const resourceCategory = await  request("get", "/resource/category")
  return {...appProps, author:author[0], menu, social, category, tag, resourceCategory}
}
