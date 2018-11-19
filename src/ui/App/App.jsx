import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// User
import PrivateRoute from 'ui/auth/PrivateRoute'
import LoginForm from 'ui/auth/LoginForm'
import RegisterForm from 'ui/auth/RegisterForm'
import SettingsForm from 'ui/auth/SettingsForm'
import AppBar from 'ui/AppBar'
import AppDrawer from 'ui/AppDrawer'
import Footer from 'ui/Footer'
import TooMuchInfo from 'ui/TooMuchInfo'
import Home from 'ui/Home'
// import Hero from 'ui/Hero'
// Dev
// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'
// import Breakpoints from 'ui/elements/Breakpoints'
import iMS from 'ui/media/ms01.png'

const App = (props) => {
  const { classes } = props

  purple('App - render')

  return (
    <div id='App-wrapper' className={classes.wrapper}>
      {/* <Breakpoints /> */}
      <div id='App-appbar' className={classes.appbar}>
        <AppBar />

      </div>
      <div>
        {/* <Hero /> */}
      </div>
      <AppDrawer />
      <div id='App-contentWraper' className={classes.contentWrapper}>
        <div id='App-content' className={classes.content}>
          <Switch>
            <Route path='/home' component={Home} />
            <PrivateRoute exact path='/settings' component={SettingsForm} />
            <Route path='/too-much-info' component={TooMuchInfo} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={RegisterForm} />
          </Switch>
        </div>
      </div>
      <footer id='App-footer' className={classes.footer}>
        <Footer />
      </footer>
    </div>
  )
}

const styles = theme => ({
  fakeContent: {
    height: 400,
  },
  wrapper: {
    // backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    flex: '1 0 auto',
    margin: 0,
    [theme.breakpoints.only('sm')]: {
      // margin: '0 5%',
    },
    [theme.breakpoints.only('md')]: {
      margin: '0 10%',
    },
    [theme.breakpoints.only('lg')]: {
      margin: '0 15%',
    },
    [theme.breakpoints.only('xl')]: {
      margin: '0 15%',
    },
  },
  content: {
    height: '100%',
  },
  footer: {
    backgroundColor: '#2b3137',
    flexShrink: 0,
    flexGrow: 0,
  },
  appbar: {
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },

  },
})

export default compose(
  withStyles(styles),
)(App)
