import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>池田早矢加 | 女優・タレント | オフィシャル</title>
        <meta
          name="description"
          content="子役時代からさまざまな芸能活動をしている池田早矢加のオフィシャルサイト"
        />
        <meta
          property="og:title"
          content="池田早矢加 | 女優・タレント | オフィシャル"
        />
        <meta
          property="og:description"
          content="子役時代からさまざまな芸能活動をしている池田早矢加のオフィシャルサイト"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15770be6-6f47-4162-b3aa-485c2e245f2c/91164730-ea9b-48f6-8898-00275623961f?org_if_sml=1"
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">池田早矢加</h1>
          <span className="home-text1">official website</span>
        </div>
      </div>
      <footer className="home-footer">
        <span className="home-text2">
          <span className="home-text3">© 2023 sayaka ikeda</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default Home
