import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = (
  { 
    imageInfo, 
    orientation = "portrait", 
    hAlign = "center", 
    vAlign = "center", 
    wrapStyles = {},
    imgStyles = {}
  }) => {
  
  const { alt = 'alt', childImageSharp, image } = imageInfo
  if (orientation === "landscape") 
    wrapStyles.height = "100%"
  imgStyles.objectPosition = `${hAlign} ${vAlign}`

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        fluid={image.childImageSharp.fluid || ''} 
        alt={alt}
        style={wrapStyles}
        imgStyle={imgStyles}
      />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} style={wrapStyles} imgStyle={imgStyles} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} style={wrapStyles} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  orientation: PropTypes.string,
  align: PropTypes.string,
}

export default PreviewCompatibleImage
