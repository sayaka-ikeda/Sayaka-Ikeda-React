import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links-navlink Menu">
        {props.text}
      </Link>
      <Link to="/works" className="navigation-links-navlink1 Menu">
        {props.text1}
      </Link>
      <a
        href="https://sgfm.jp/f/090e76f1bc5bf67113ee8af28426ae03"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link Menu"
      >
        {props.text2}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text2: 'Pricing',
  text1: 'Features',
  text: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
