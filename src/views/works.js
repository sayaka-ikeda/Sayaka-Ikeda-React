import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogPostCard2 from '../components/blog-post-card2'
import BlogPostCard1 from '../components/blog-post-card1'
import './works.css'

const Works = (props) => {
  return (
    <div className="works-container">
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15770be6-6f47-4162-b3aa-485c2e245f2c/7cad8b66-1ab4-40ef-b8f0-ec30e07f458e?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="works-features">
        <img
          alt="image"
          src="/vintage%20simple%20giveaway%20email%20header-1400w.png"
          className="works-image"
        />
        <h1 className="works-text">主な芸歴</h1>
        <div className="works-blog">
          <div className="works-container1">
            <BlogPostCard2
              label="【映画】"
              title="バトル・ロワイアル"
              image_src="/102309-1200w.jpg"
              description="江藤 恵 役"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard2>
            <BlogPostCard2
              label="【映画】"
              title="STACY"
              image_src="/%E3%82%B9%E3%83%86%E3%82%A4%E3%82%B7%E3%83%BC-1200w.png"
              description="かなえ 役"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></BlogPostCard2>
          </div>
        </div>
        <div className="works-blog1">
          <div className="works-container2">
            <BlogPostCard1
              label="【CD】"
              title="CONA-milk"
              image_src="/%E3%82%B3%E3%83%8A%E3%83%9F-800w.png"
              description="「原始のほら穴」"
              profile_src="/%E3%82%B3%E3%83%8A%E3%83%9F-800w.png"
              description1="「KOIBITOたちアブないヨ」"
              rootClassName="rootClassName3"
            ></BlogPostCard1>
          </div>
          <div className="works-container3">
            <BlogPostCard1
              label="【ミュージカル】"
              title="Annie"
              image_src="/%E3%82%A2%E3%83%8B%E3%83%BC-800w.png"
              description="シャーリー 役"
              description1=" "
              rootClassName="rootClassName5"
            ></BlogPostCard1>
          </div>
          <div className="works-container4">
            <BlogPostCard1
              label="【ミュージカル】"
              title="真夏のシンデレラ館で"
              image_src="/%E7%9C%9F%E5%A4%8F-800w.png"
              description="涼 役"
              description1=" "
              rootClassName="rootClassName1"
            ></BlogPostCard1>
          </div>
        </div>
      </div>
      <span className="works-text01">
        <span>NHK</span>
        <span>『らくがきいっぱい』</span>
        <span>田中あきら役</span>
        <br></br>
        <br></br>
        <span>FM調布</span>
        <span>『やまちゃんさやかの夜のおつまみ』パーソナリティー</span>
        <br></br>
        <br></br>
        <br></br>
        <span>東京ゲームショーでMC・ゲスト・ダンサー</span>
        <br></br>
        <br></br>
        <br></br>
        <span>【その他】</span>
        <br></br>
        <br></br>
        <span>ドラマ・CM・ライブ・イベント</span>
        <br></br>
        <span>イメージキャラクター・声優・ゲーム挿入歌など</span>
        <br></br>
      </span>
      <footer className="works-footer">
        <span className="works-text23">
          <span className="works-text24">© 2023 sayaka ikeda</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default Works
