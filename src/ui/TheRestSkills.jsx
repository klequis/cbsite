import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import H2 from 'ui/H2'
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
import iZenHub from 'ui/media/new/zenhub.svg'
import iNodemon from 'ui/media/new/nodemon.svg'
import iDrupal from 'ui/media/new/drupal.svg'
import iAWS from 'ui/media/new/aws-sdk-js.svg'
import iJS from 'ui/media/new/js-es6.svg'
import iBootstrap from 'ui/media/new/bootstrap.svg'
import iCSharp from 'ui/media/new/c-sharp.png'

// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}


const TheRestSkills = (props) => {
  const { classes } = props
  return (
    <Paper
        className={classes.wrapper}
        elevation={0}
        style={shadowStyle}
      >
      <H2 align='center'>...And the rest of my current skills</H2>
      <div className={classes.theRestLogos}>
          <ResponsiveImage src={iAWS} className={classes.restLogo} alt='aws javascript sdk logo' />
          <ResponsiveImage src={iRedux} className={classes.restLogo} alt='redux logo' />
          <ResponsiveImage src={iReactRouter} className={classes.restLogo} alt='react router logo' />
          <ResponsiveImage src={iMUI} className={classes.restLogo} alt='material ui logo' />
          <ResponsiveImage src={iBootstrap} className={classes.restLogo} alt='bootstrap logo' />
          <ResponsiveImage src={iRest} className={classes.restLogo} alt='rest api logo' />
          <ResponsiveImage src={iMySql} className={classes.restLogo} alt='material ui logo' />
          <ResponsiveImage src={iJS} className={classes.restLogo} alt='javascript logo' />
          <ResponsiveImage src={iRamda} className={classes.restLogo} alt='ramda logo' />
          <ResponsiveImage src={iNodemon} className={classes.restLogo} alt='nodemon logo' />
          <ResponsiveImage src={iMocha} className={classes.restLogo} alt='mocha logo' />
          <ResponsiveImage src={iWebpack} className={classes.restLogo} alt='webpack logo' />
          <ResponsiveImage src={iUbuntu} className={classes.restLogo} alt='ubuntu logo' />
          <ResponsiveImage src={iTravis} className={classes.restLogo} alt='travis ci logo' />
          <ResponsiveImage src={iPassport} className={classes.restLogo} alt='passport logo' />
          <ResponsiveImage src={iZenHub} className={classes.restLogo} alt='zenhub logo' />
          <ResponsiveImage src={iMarkdown} className={classes.restLogo} alt='markdown logo' />
          <ResponsiveImage src={iYarn} className={classes.restLogo} alt='yarn logo' />
          <ResponsiveImage src={iDrupal} className={classes.restLogo} alt='drupal logo' />
          <ResponsiveImage src={iWordpress} className={classes.restLogo} alt='wordpress logo' />
        </div>
    </Paper>
  )
}

const styles = {
  restLogo: {
    // marginRight: 5,
    // marginLeft: 5,
    margin: '1rem 1rem',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '4rem 0'
  },
  theRestLogos: {
    // minHeight: 300,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    paddingLeft: '5%',
    paddingRight: '5%',
    // alignItems: 'center',
  }
}

export default withStyles(styles)(TheRestSkills)