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
        <Grid columns={3} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={UxHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>USER EXPERIENCE</Header>
            <p>
            Understanding what drives the user to navigate, shop or work online
             is essential to develop a good product and we take that very
              seriously. We know that if we understand the user’s ways
               we can design more efficiently and exceed expectations. Some companies out there will give you
              cookie cutter solutions. Not one solution fits all and personalization is the future.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={ManagementHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>MANAGEMENT</Header>
            <p>
            Developing products is a complex process.
            Our experience tells us that constant and efficient communication
            is the key to save you resources.
            That is why we have the tools and the expertise to simplify this process for you;
            avoiding any technical jargon our team will provide you a clear vision
            of where we are heading with the project at any point in time.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={ManagementHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>ANALYTICS</Header>
            <p>
              If you have an existing product or if we built one for you; we can
              help you take a step further to create and execute a strategic plan for engaging
              your audience and convert leads into sales. Our technical and experienced common
              sense advice can help deliver the right message in the right place at the right
              time. All while tracking performance for further analysis.
            </p>
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
            <p>
              If you want to be taken seriously in the market you need a strong
              brand that represents your product or service and connects with your customers.
              A cohesive brand strategy that goes beyond a “pretty logo” is essential to be
              perceived properly by your target audience.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={UiHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>INTERFACE DESIGN</Header>
            <p>
              Some companies out there will perhaps give you a “good looking interface” however,
              without research, standards, best practices and deep understanding of user
              behaviour the value you get is partial. We know the difference and we blended well!
            </p>
          </Grid.Column>
        </Grid>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={WebHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>WEB DESIGN</Header>
            <p>
              Talking about “sexy and approachable interfaces” (A real quote from a customer)
              Our approach to designing for the digital area is a combination of
              tasty and efficient use of typography, color, and visuals. A pixel perfect result to engage your audience.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={AdHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>ADVERTISING</Header>
            <p>
              Our design skills extend across the entire spectrum. Need a campaign
               that requires storytelling, illustration, photography, elaborate photoshop work?
                Or simply a genius way to deliver the message on a budget? Count us in!
            </p>
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
            <p>
              Do you have an idea in mind that will disrupt the market?
              Maybe the mobile or web application you envision hasn’t been done before
              or you have new creative way to solve the problem more efficently?
              If so, we are up for the challenge. If there is something we love the
              most is to innovate. Our passion is to create specialized software.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={NativeHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>MOBILE APPLICATIONS</Header>
            <p>
              We design and develop web applications that are responsive which means they look and perform great in mobile devices. If your product requires a “native mobile application” we can help you evaluate the pros and cons of both approaches and build the appropriate app for your audience and or problem.
            </p>
          </Grid.Column>
        </Grid>
        <Grid columns={2} className={'no-vertical-margin'}>
          <Grid.Column>
            <img src={EcommerceHmIcon} alt="Strategy Icon" />
            <Header as={'h4'} className={"spaced"} color={"purple"}>E-COMMERCE</Header>
            <p>
            Online shopping is increasing at an unprecedented rate and your product can’t be left behind. There are multiple solutions out there to create your own online store for very cheap. But do they provide the customization you need to please your customers? Does it adapt well with your brand? Can reliably host all your products? Do you get instant response when things go wrong? Or is it a “do it yourself” “hope for the best” type of offering. The online market place is a brutal battle for lead conversion and we are some of the best warrior s you can find.
            </p>
          </Grid.Column>
          <Grid.Column>
            <img src={CmsHmIcon} alt="Strategy Icon" />
              <Header as={'h4'} className={"spaced"} color={"purple"}>CONTENT MANAGEMENT</Header>
            <p>
            We have created multiple content management solutions using Wordpress, Joomla, Gatsby-React  and many others. We can get you company website up and running in no time. The truth is however, that although there are many new trendy “do it yourself” or “cookie-cutter” solutions out there; your company is as unique as your product and to stand out in the market you need to customize it to your needs and your customer’s. CMSs out there provide certain flexibility and we know how far they can go that’s why we can advise you in the best technology to use to save you time, resource and honestly headaches.
            </p>
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
