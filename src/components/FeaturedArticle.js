import React from 'react'
import PropTypes from 'prop-types'

const FeaturedArticle = ({title}) => (
    <div className="tile is-parent">
        <div className="tile is-child card">
            <div className="card-header">
                <p className="card-header-title">{title}</p>
            </div>
            <div className="card-image">
                <figure className="image is-2by1">
                    <img alt="test" src="https://bulma.io/images/placeholders/640x320.png"></img>
                </figure>
            </div>
        </div>
    </div>
)

FeaturedArticle.propTypes = {
    title: PropTypes.string
}

export default FeaturedArticle