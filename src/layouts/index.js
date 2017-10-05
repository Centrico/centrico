import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteNav from '../components/site-nav'

// css

import 'semantic-ui-css/semantic.min.css';
import './index.css'
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
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
