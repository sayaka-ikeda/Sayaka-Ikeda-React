import React from 'react'

import PropTypes from 'prop-types'

import './feature-card41.css'

const FeatureCard41 = (props) => {
  return (
    <div className={`feature-card41-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card41-text">{props.title}</h2>
      <h2 className="feature-card41-text1">{props.title1}</h2>
      <span className="feature-card41-text2">{props.description}</span>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card41-image"
      />
    </div>
  )
}

FeatureCard41.defaultProps = {
  image_alt: 'image',
  title1: 'Lorem ipsum',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Lorem ipsum',
}

FeatureCard41.propTypes = {
  image_alt: PropTypes.string,
  title1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard41
