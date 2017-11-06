import React from 'react'
import Link from 'gatsby-link'
import ContactForm from '../components/form'
import { Grid, Container, Image, Header, Input, Form, Button, Segment, Label } from 'semantic-ui-react'
// Icons
import UxHmIcon from '../../public/images/ux-hm-icon.png'
import ManagementHmIcon from '../../public/images/strategy-hm-icon.png'
import BrandingHmIcon from '../../public/images/branding-hm-icon.png'
import UiHmIcon from '../../public/images/interface-hm-icon.png'
import WebHmIcon from '../../public/images/web-hm-icon.png'
import AdHmIcon from '../../public/images/ads-hm-icon.png'
import CustomHmIcon from '../../public/images/custom-hm-icon.png'
import NativeHmIcon from '../../public/images/dev-hm-icon.png'
import EcommerceHmIcon from '../../public/images/ecommerce-hm-icon.png'
import CmsHmIcon from '../../public/images/cms-hm-icon.png'



import StrategyHmIcon from '../../public/images/strategy-hm-icon.png'
import DesignHmIcon from '../../public/images/design-hm-icon.png'
import DevHmIcon from '../../public/images/dev-hm-icon.png'

const Services = () => (
  <div>
    <Container>
      <Segment padded={"very"} basic className={"fluid-grid hm-block-img"}>
        <Header as={'h4'} className={"spaced"} color={"purple"}>STRATEGY</Header>
        <Header as={'h2'} color={"purple"}>The strategy is finding the closest path to solving user’s problems</Header>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={UxHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>USER EXPERIENCE</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
          <Grid.Column>
            <img src={ManagementHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>MANAGEMENT</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment padded={"very"} basic className={"fluid-grid hm-block-img"}>
        <Header as={'h4'} className={"spaced"} color={"purple"}>DESIGN</Header>
        <Header as={'h2'} color={"purple"}>An eficient and consistent design improves development and user satisfaction</Header>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={BrandingHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>BRANDING - IDENTITY</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
          <Grid.Column>
            <img src={UiHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>INTERFACE DESIGN</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
        </Grid>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={WebHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>WEB DESIGN</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
          <Grid.Column>
            <img src={AdHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>DIGITAL ADVERTISING</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment padded={"very"} basic className={"fluid-grid hm-block-img"}>
        <Header as={'h4'} className={"spaced"} color={"purple"}>DEVELOPMENT</Header>
        <Header as={'h2'} color={"purple"}>We use the right technologies at the right time with a vision to the future</Header>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={CustomHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>CUSTOM SOLUTIONS</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
          <Grid.Column>
            <img src={NativeHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>NATIVE APPLICATIONS</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
        </Grid>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={EcommerceHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>E-COMMERCE</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
          <Grid.Column>
            <img src={CmsHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>CONTENT MANAGEMENT</Header>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
    <div className={"form"}>
      <Container>
        <Segment padded={"very"} basic className={"fluid-grid"}>
          <Header as={'h2'}>Like what you see?  LETS TALK.</Header>
          <Header as={'h4'} className={"spaced"}>SUBMIT REQUEST</Header>
          <ContactForm/>
        </Segment>
      </Container>
    </div>
  </div>
)

export default Services
