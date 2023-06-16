import React from 'react'

import PropTypes from 'prop-types'

import './feature-card4.css'

const FeatureCard4 = (props) => {
  return (
    <div className={`feature-card4-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card4-text">{props.title}</h2>
      <h2 className="feature-card4-text1">{props.title1}</h2>
      <span className="feature-card4-text2">{props.description}</span>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card4-image"
      />
    </div>
  )
}

FeatureCard4.defaultProps = {
  title1: 'Lorem ipsum',
  rootClassName: '',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Lorem ipsum',
}

FeatureCard4.propTypes = {
  title1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard4
