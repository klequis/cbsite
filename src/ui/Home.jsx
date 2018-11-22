import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LeftRightSection from 'ui/LeftRightSection'
import iTeaching from 'ui/media/teaching.jpg'
import iMS from 'ui/media/ms01.png'
// import iMSNarrow from 'ui/media/ms01-narrow.png'
import iMeetup01 from 'ui/media/meetup01.jpg'
import iTR from 'ui/media/tr.jpg'
import iResponsive from 'ui/media/new/responsive.svg'
import iRiding from 'ui/media/riding.jpg'
import Skills from 'ui/Skills'
import H2 from 'ui/H2'
import St2 from 'ui/St2'
import ResponsiveImage from 'ui/elements/ResponsiveImage'
import iReactRouter from 'ui/media/new/react-router.svg'
import iRedux from 'ui/media/new/redux.svg'
import iMUI from 'ui/media/new/material-ui.svg'
import iMySql from 'ui/media/new/mysql.svg'
import iRest from 'ui/media/new/rest-api.svg'
import iWebpack from 'ui/media/new/webpack.svg'
import iUbuntu from 'ui/media/new/ubuntu.svg'
import iPassport from 'ui/media/new/passport.svg'
import iMocha from 'ui/media/new/mocha.svg'
import iTravis from 'ui/media/new/travis-ci.svg'
import iYarn from 'ui/media/new/yarn.svg'
import iRamda from 'ui/media/new/ramda.svg'
import iWordpress from 'ui/media/new/wordpress.svg'
import iMarkdown from 'ui/media/new/markdown.svg'

// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const Body1 = ({ children }) => {
  return (<Typography variant='body1' align='left'>{children}</Typography>)
}

const Home = (props) => {
  const { classes } = props
  return (
    <div>
      <Skills />
      <LeftRightSection image={iResponsive} imageSide='left' shadow>
        <H2>Responsive</H2>
        <St2>A responsive Web Developer</St2>
        <St2> Using responsive CSS</St2>
        <St2>To make responsive Web Apps</St2>
      </LeftRightSection>
      <LeftRightSection image={iMeetup01} imageSide='right'>
        <H2>TriValley Coders</H2>
        <St2>Founder</St2>
        <Body1 align='left'>TriValley Coders was founded in 2016 as a community of software developers helping eachother learn to code. Over the past 2.5 years it has evolved into a class-like format with mentors helping attendees to lean specific MERN Stack skills. Since inception, TriValley Coders has held more than 160 events.</Body1>
      </LeftRightSection>
      <LeftRightSection image={iTeaching} imageSide='left' shadow>
      <H2>Teaching</H2>
      <Body1>At TriValley Coders I have been teaching people to code for the past two years. I also held a weekly coding and general tech class for middle school children from May 2016 to Feb 2017. In a form role ...</Body1>
      </LeftRightSection>

      <LeftRightSection image={iMS} imageSide='right' shadow>
        <H2>Morgan Stanley</H2>
        <Body1>My first role at Morgan Stanley was creating automated spreadsheet models. I worked with a wide variety of financial data and developed a query and reporting engine that worked against Sybase databases. Over a period of 14 years I filled the roles of software developer, team lead, development manager, project manager and product manager.</Body1>
        <Body1>Applications I worked on concerned CRM, Knowledge Management, Document Management, Banker & Analyst Productivity, reducing imformation overload, Firmwide Branding and Pitchbook automation. I have often been called 'the grand-father of pitchbook autmation', altough dropping the 'grand' would be fine with me. </Body1>
      </LeftRightSection>
      <LeftRightSection image={iTR} imageSide='left' shadow>
        <Body1>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to develop Thomson Reuters MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs in PowerPoint presentations.</Body1>
      </LeftRightSection>
      <LeftRightSection image={iRiding} imageSide='right' shadow>
        <H2>Dressage Trainer & Instructor</H2>
        <Body1>I fell in love with horses when I was 10 years old.</Body1>
      </LeftRightSection>
      <div className={classes.theRest}>
        <ResponsiveImage src={iMySql} className={classes.restLogo} alt='material ui logo' />
        <ResponsiveImage src={iReactRouter} className={classes.restLogo} alt='react router logo' />
        <ResponsiveImage src={iRedux} className={classes.restLogo} alt='redux logo' />
        <ResponsiveImage src={iMarkdown} className={classes.restLogo} alt='markdown logo' />
        <ResponsiveImage src={iWordpress} className={classes.restLogo} alt='wordpress logo' />
        <ResponsiveImage src={iRamda} className={classes.restLogo} alt='ramda logo' />


        <ResponsiveImage src={iYarn} className={classes.restLogo} alt='yarn logo' />
        <ResponsiveImage src={iPassport} className={classes.restLogo} alt='passport logo' />
        <ResponsiveImage src={iMocha} className={classes.restLogo} alt='mocha logo' />
        <ResponsiveImage src={iTravis} className={classes.restLogo} alt='travis ci logo' />
        <ResponsiveImage src={iUbuntu} className={classes.restLogo} alt='ubuntu logo' />



        <ResponsiveImage src={iMUI} className={classes.restLogo} alt='material ui logo' />
        <ResponsiveImage src={iRest} className={classes.restLogo} alt='rest api logo' />
        <ResponsiveImage src={iWebpack} className={classes.restLogo} alt='webpack logo' />

      </div>
    </div>
  )
}

const styles = {
  restLogo: {
    marginRight: 5,
    marginLeft: 5,
  },
  theRest: {
    minHeight: 300,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  }
}

export default withStyles(styles)(Home)