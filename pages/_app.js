import App from "next/app"
import {request} from "../utils/request";
import '../styles/globals.css'
import {createContext} from "react";

export const InfoContext = createContext({})

export default function MyApp(props) {
  const { Component, pageProps,author, category, tag,} = props
  return (
      <InfoContext.Provider value={{author, category, tag,}}>
        <Component {...pageProps} />
      </InfoContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const author = await request("get", "/author")
  const category = await request('get','/category')
  const tag = await request('get',"/tag")
  return {...appProps, author, category, tag}
}
