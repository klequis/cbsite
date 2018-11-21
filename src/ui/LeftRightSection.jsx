import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'


// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}

const LeftRightSection = (props) => {
  const { children, classes, image, imageSide='left', shadow } = props


  if (imageSide === 'left') {
    return (
      <Paper
        className={classes.wrapper}
        elevation={0}
        style={shadow ? shadowStyle : {}}
      >
        <div className={classes.imageSideStyle}>
          <ResponsiveImage src={image} alt='carl teaching' />
        </div>
        <div className={classes.textSideStyle}>
          {children}
        </div>
      </Paper>
    )
  }
  return (
    <Paper
      className={classes.wrapper}
      elevation={0}
      style={shadow ? shadowStyle : {}}
    >
      <div className={classes.textSideStyle}>
        {children}
      </div>
      <div className={classes.imageSideStyle}>
        <ResponsiveImage src={image} alt='carl teaching' />
      </div>
    </Paper>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    margin: 8,
    minHeight: 100,
    backgroundColor: 'transparent',
  },
  imageSideStyle: {
    flexBasis: '33.333333%',
    // backgroundColor: 'orange',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
  },
  textSideStyle: {
    // flexBasis: '66.666666%',
    // backgroundColor: 'purple',
    width: '65%',
    padding: '4rem 4rem 2rem 4rem',
    margin: '0 auto',
    flexShrink: 1,
    alignSelf: 'center',
    maxWidth: '64rem',
    textAlign: 'left',
  },

}

export default withStyles(styles)(LeftRightSection)