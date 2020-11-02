import React from "react"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Social from "../components/Social"
import Content from "../components/Content"
import "../styles/main.scss"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuffy Hacks</title>
      </Helmet>
      <Header />
      <Social />
      <Content />
    </>
  )
}
