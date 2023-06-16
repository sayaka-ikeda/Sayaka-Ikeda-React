import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <span className="blog-post-card3-text">{props.label}</span>
        <h1 className="blog-post-card3-text1">{props.title}</h1>
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text2">{props.description}</span>
          <span className="blog-post-card3-text3">{props.description1}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=1500',
  label: 'ENTERPRISE',
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  author: 'by Jon Doe 5 hours ago',
}

BlogPostCard3.propTypes = {
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description1: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard3
