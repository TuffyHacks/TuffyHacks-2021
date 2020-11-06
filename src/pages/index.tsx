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

        {/* Adhering to Open Graph protocol (https://ogp.me/) */}
        <meta property="og:title" content="TuffyHacks" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="mascot.png" />
        <meta property="og:site_name" content="TuffyHacks" />
      </Helmet>
      <Header />
      <Social />
      <Content />
    </>
  )
}
