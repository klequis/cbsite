import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'
import iMongo from './media/new/mongodb.svg'
import iExpress from './media/new/express.svg'
import iReact from './media/new/react.svg'
import iNode from './media/new/node.svg'
import H1 from 'ui/H1'
import H2 from 'ui/H2'
// import iResponsive from './media/responsive-ui.svg'

// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}

const Skills = (props) => {
  const { classes, imageSide } = props


  if (imageSide === 'left') {
    return (
      <Paper
        className={classes.wrapper}
        elevation={0}

      >
        <div className={classes.imageSideStyle}>
          <div className={classes.logoRow}>
            <ResponsiveImage src={iMongo} alt='mongo db logo' maxHeight={40} className={classes.img}/>
            <ResponsiveImage src={iExpress} alt='express js logo' maxHeight={40} className={classes.img}/>

          </div>
          <div className={classes.logoRow}>
            <ResponsiveImage src={iReact} alt='react js logo' maxHeight={32} className={classes.img}/>
            <ResponsiveImage src={iNode} alt='node js logo' maxHeight={32} className={classes.img}/>
          </div>
        </div>
        <div className={classes.textSideStyle}>
          <H1>Carl Becker</H1>
          <H2>MERN Stack Developer</H2>
        </div>
      </Paper>
    )
  }
  return (
    <Paper
      className={classes.wrapper}
      elevation={0}
    >
      <div className={classes.textSideStyle}>
        <H1>Carl Becker</H1>
        <H2>MERN Stack Developer</H2>
      </div>
      <div className={classes.imageSideStyle}>
        <div className={classes.logoRow}>
            <ResponsiveImage src={iMongo} alt='mongo db logo' maxHeight={40} className={classes.img}/>
            <ResponsiveImage src={iExpress} alt='express js logo' maxHeight={40} className={classes.img}/>

          </div>
          <div className={classes.logoRow}>
            <ResponsiveImage src={iReact} alt='react js logo' maxHeight={32} className={classes.img}/>
            <ResponsiveImage src={iNode} alt='node js logo' maxHeight={32} className={classes.img}/>
          </div>
      </div>
    </Paper>
  )
}

/*
360

*/

const styles = theme => {
  const space = theme.spacing.unit
  return({
    imageSideStyle: {
      // flexBasis: '33.333333%',
      width: '45%',
      // backgroundColor: 'orange',
      // paddingTop: 8,
      // paddingBottom: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'space-evenly',
    },
    textSideStyle: {
      // backgroundColor: 'purple',
      width: '55%',
      padding: '4rem 4rem 2rem 4rem',
      margin: '0 auto',
      flexShrink: 1,
      alignSelf: 'center',
      maxWidth: '64rem',
      textAlign: 'left',
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
        // paddingLeft: '10%',
        // paddingRight: '10%',

      },
      [theme.breakpoints.up(690)]: {
        // paddingLeft: '15%',
        // paddingRight: '15%',
      },
      [theme.breakpoints.up(800)]: {
        // paddingLeft: '20%',
        // paddingRight: '20%',
      },
    },
    wrapper: {
      display: 'flex',
      margin: 8,
      minHeight: 100,
      backgroundColor: 'transparent',
      // backgroundColor: 'lightblue',
    },
  })
}

export default withStyles(styles)(Skills)