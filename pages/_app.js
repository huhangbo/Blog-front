import App from "next/app"
import {request} from "../utils/request";
import '../styles/globals.css'
import {createContext} from "react";

export const InfoContext = createContext({})

export default function MyApp(props) {
  const { Component, pageProps,author, menu, social, category, tag,} = props
  return (
      <InfoContext.Provider value={{author, menu, social, category, tag,}}>
        <Component {...pageProps} />
      </InfoContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  console.log(appContext.router.route)
  const appProps = await App.getInitialProps(appContext)
  const menu = await request("get", "/menu")
  const author = await request("get", "/author")
  const social = await request("get", "/social")
  const category = await request('get','/category')
  const tag = await request('get',"/tag")
  return {...appProps, author, menu, social, category, tag}
}
