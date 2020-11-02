import React from "react"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Social from "../components/Social"
import Content from "../components/Content"
import "../styles/main.scss"

export default function Home() {
  return (
    <>
      <div>
        {/* fix */}
        {/* <Helmet>
  <meta charSet="utf-8" />
  <title>Tuffy Hacks</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet> */}
      </div>
      <Header />
      <Social />
      <Content />
    </>
  )
}
