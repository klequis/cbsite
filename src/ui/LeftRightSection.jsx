import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'


// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'


const LeftRightSection = (props) => {
  const { classes, image, imageSide='left', title } = props


  if (imageSide === 'left') {
    return (
      <Paper className={classes.wrapper}>
        <div className={classes.imageSideStyle}>
          <ResponsiveImage src={image} alt='carl teaching' />
        </div>
        <div className={classes.textSideStyle}>
          <Typography variant='h4'>
            {title}
          </Typography>
        </div>
      </Paper>
    )
  }
  return (
    <Paper className={classes.wrapper}>
      <div className={classes.textSideStyle}>
        <Typography variant='h4'>
          {title}
        </Typography>
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
  },
  imageSideStyle: {
    flexBasis: '33.333333%',
    backgroundColor: 'orange',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
  },
  textSideStyle: {
    flexBasis: '66.666666%',
    backgroundColor: 'purple',
  },

}

export default withStyles(styles)(LeftRightSection)