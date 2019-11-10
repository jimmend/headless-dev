import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({quotee, quote}) => {
    return (
        <div style={{
            margin: "2rem 0.5rem",
            padding: "2rem 4rem",
            backgroundColor: "#273A73",
            textAlign: "center",
            color: "#ffffff"  
        }}>
            <p style={{
              fontWeight: 600,
              fontSize: "1.25rem",
            }}>"{quote}"</p>
            <p style={{
              textAlign: "right"
            }}>-{quotee}</p>
        </div>
    )
}

Quote.propTypes = {
    quotee: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
}

export default Quote