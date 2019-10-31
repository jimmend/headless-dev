import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, orientation = "portrait", hAlign = "center", vAlign = "center"  }) => {
  
  const { alt = '', childImageSharp, image } = imageInfo
  const wrapperStyles = (orientation === "landscape") ? { height: "100%" } : {}
  const imgStyles = { objectPosition: `${hAlign} ${vAlign}`}
  console.log(`imgStyles: ${imgStyles}`)

  if (!!image && !!image.childImageSharp) {
    return (
      <Img 
        fluid={image.childImageSharp.fluid} 
        alt={alt}
        style={wrapperStyles}
        imgStyle={imgStyles}
      />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} style={wrapperStyles} imgStyle={imgStyles} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} style={wrapperStyles} />

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
