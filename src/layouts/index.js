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
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
