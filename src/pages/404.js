import React from 'react'
import Layout from '../components/Layout'
import exclamation from '../img/exclamation-triangle.svg'

const NotFoundPage = () => (
  <Layout isLandingPage={true}>
    <div className="not-found">
      <img 
        src={exclamation} 
        alt="danger sign" 
        style={{
          height: "100px"
        }} />
      <h1>Page Not Found</h1>
      <p>No page here, yo.</p>
    </div>
  </Layout>
)

export default NotFoundPage
