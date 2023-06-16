import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15770be6-6f47-4162-b3aa-485c2e245f2c/454acb69-7fcd-4767-a43f-aa6bc34dfc31?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="about-hero">
        <div className="about-container1">
          <h1 className="about-text">池田早矢加</h1>
          <span className="about-text01">SAYAKA　IKEDA</span>
          <span className="about-text02">
            <span>生年月日…1982年9月29日</span>
            <br className="about-text04"></br>
            <span>出生地…愛媛県</span>
            <br className="about-text06"></br>
            <span>血液型…A型</span>
          </span>
          <span className="about-text08">
            <span>スカウトをしていただき芸能界の世界へ</span>
            <br></br>
            <span>子供の頃から映画やミュージカルなど</span>
            <br></br>
            <span>色々な仕事に挑戦してきました。</span>
            <br></br>
            <br></br>
            <span>結婚を期にセーブしていましたが</span>
            <br></br>
            <span>子供達も大きくなってきたので</span>
            <br></br>
            <span>再び活動していきたいと思います。</span>
            <br></br>
            <br></br>
            <span>初心に帰り年齢と人生の積み重ねを作品へ</span>
            <br></br>
            <span>更なるステージに繋がるよう頑張ります。</span>
            <br></br>
            <br></br>
            <span>応援よろしくお願いします。</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="about-hero-mobile">
        <div className="about-container2">
          <h1 className="about-text30">池田早矢加</h1>
          <span className="about-text31">
            <span>SAYAKA　IKEDA</span>
            <br></br>
          </span>
          <span className="about-text34">
            <span className="about-text35">生年月日…1982年9月29日</span>
            <br></br>
            <span>出生地…愛媛県</span>
            <br></br>
            <span>血液型…A型</span>
            <br></br>
          </span>
          <span className="about-text41">
            <span>スカウトをしていただき芸能界の世界へ</span>
            <br></br>
            <span>子供の頃から映画やミュージカルなど</span>
            <br></br>
            <span>色々な仕事に挑戦してきました。</span>
            <br></br>
            <br></br>
            <span>結婚を期にセーブしていましたが</span>
            <br></br>
            <span>子供達も大きくなってきたので</span>
            <br></br>
            <span>再び活動していきたいと思います。</span>
            <br></br>
            <br></br>
            <span>初心に帰り年齢と人生の積み重ねを作品へ</span>
            <br></br>
            <span>更なるステージに繋がるよう頑張ります。</span>
            <br></br>
            <br></br>
            <span>応援よろしくお願いします。</span>
          </span>
        </div>
        <img
          alt="image"
          src="/106790%20-%20%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF-1500h.jpg"
          className="about-image"
        />
      </div>
      <footer className="about-footer">
        <span className="about-text62">
          <span className="about-text63">© 2023 sayaka ikeda</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default About
