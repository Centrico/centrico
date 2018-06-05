import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteNav from '../components/site-nav'
import Footer from '../components/footer'
import '../../semantic/dist/semantic.min.css';

import './centrico.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Web and Mobile Development, and Design Firm - ThoughtCode"
      meta={[
        { name: 'description', content: 'ThoughtCode is a digital firm with creativity at the core. We believe our clients represent the innovative force that enhances, helps, transforms... people’s lifes. We are here to help you push those boundries even further and provide meaningful experiences that WOW costmers and drive bussines. We focus in websites, custom apps, user experience, branding, marketing, and all things digital for clients, audiences and ourselves.' },
        { name: 'keywords', content: 'web, development, user experience, software, agile development, design, user interface, ui, programming, mvp, minimum viable product development, app development, mobile apps, online store, e-commerce, ecommerce, creative agency'},
      ]}
    />
    <SiteNav />
    <div className="page-content">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
