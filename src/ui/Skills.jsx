import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'
import H2 from 'ui/H2'
import iMongo from './media/new/mongodb.svg'
import iExpress from './media/new/express.svg'
import iReact from './media/new/react.svg'
import iNode from './media/new/node.svg'
// import iResponsive from './media/responsive-ui.svg'

// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}

const Skills = (props) => {
  const { children, classes } = props

  return (
    <Paper id='Skills-wrapper' className={classes.wrapper} elevation={0}>
      <H2>Mern Stack Developer</H2>
      <Paper
        className={classes.wrapper}
        elevation={0}
      >
        <div className={classes.logoRow}>
          <ResponsiveImage src={iMongo} alt='mongo db logo' maxHeight={40} className={classes.img}/>
          <ResponsiveImage src={iExpress} alt='express js logo' maxHeight={40} className={classes.img}/>

        </div>
        <div className={classes.logoRow}>
          <ResponsiveImage src={iReact} alt='react js logo' maxHeight={32} className={classes.img}/>
          <ResponsiveImage src={iNode} alt='node js logo' maxHeight={32} className={classes.img}/>
        </div>
        <div className={classes.textSideStyle}>
          {children}
        </div>
      </Paper>
    </Paper>
  )
}

/*
360

*/

const styles = theme => {
  const space = theme.spacing.unit
  return({
    img: {
      margin: '20px 0',
    },
    logoRow: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      paddingLeft: 0,
      paddingRight: 0,
      [theme.breakpoints.up(316)]: {
        justifyContent: 'space-between',
      },
      [theme.breakpoints.up(400)]: {
        paddingLeft: '10%',
        paddingRight: '10%',

      },
      [theme.breakpoints.up(690)]: {
        paddingLeft: '15%',
        paddingRight: '15%',
      },
      [theme.breakpoints.up(800)]: {
        paddingLeft: '20%',
        paddingRight: '20%',
      },




      // [theme.breakpoints.up(700)]: {
        // paddingLeft: '10%',
        // paddingRight: '10%',
      // },

      // [theme.breakpoints.up(520)]: {
      //   paddingLeft: '15%',
      //   paddingRight: '15%',
      // },
      // [theme.breakpoints.up(590)]: {
      //   paddingLeft: '20%',
      //   paddingRight: '20%',
      // },
      // [theme.breakpoints.up(682)]: {
      //   paddingLeft: '25%',
      //   paddingRight: '25%',
      // },
      // [theme.breakpoints.up(814)]: {
      //   paddingLeft: '30%',
      //   paddingRight: '30%',
      // },
      // justifyContent: 'center',
      // paddingTop: space * 2,
      // paddingBottom: space * 2,
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      margin: 8,
      minHeight: 100,
      // backgroundColor: 'transparent',
      // backgroundColor: 'lightblue',
    },
  })
}

export default withStyles(styles)(Skills)