import React from 'react'
import PropTypes from 'prop-types'
import ArticleCard from '../components/ArticleCard'

const FeaturedItems = ({ gridItems }) => (
    <div>
        <h2>featured articles</h2>
        <div className="tile is-ancestor">
            {gridItems.slice(0, 2).map(item => (
                <ArticleCard key={item.title} title={item.title} />
            ))}
        </div>
        <div className="tile is-ancestor">
            {gridItems.slice(2, 5).map(item => (
                <ArticleCard key={item.title} title={item.title} />
            ))}
        </div>
    </div>
)

FeaturedItems.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
        })
    ),
}

export default FeaturedItems