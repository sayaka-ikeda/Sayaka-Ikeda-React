import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
          <h1 className="blog-post-card2-text1">{props.title}</h1>
          <span className="blog-post-card2-text2">{props.description}</span>
        </div>
        <div className="blog-post-card2-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="blog-post-card2-image"
          />
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_alt: 'image',
  when: '3 days ago',
  title: 'Lorem ipsum dolor sit amet',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  label: 'ENTERPRISE',
  profile_alt: 'profile',
  author: 'Jane Doe',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1200',
}

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  when: PropTypes.string,
  title: PropTypes.string,
  profile_src: PropTypes.string,
  label: PropTypes.string,
  profile_alt: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard2
