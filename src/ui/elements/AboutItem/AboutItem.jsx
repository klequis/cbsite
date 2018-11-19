import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Chip, Typography, Paper } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'

// Dev
// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const AboutItem = (props) => {
  const { alt='', classes, image, tags=[], title } = props
  const renderTags = tags.map(t => {
    return (
      <Chip key={t} label={t} className={classes.chip}/>
    )
  })
  return (
    <Paper className={classes.wrapper}>
      <div className={classes.img}>
        <ResponsiveImage src={image} alt={alt} />
      </div>
      <div className={classes.text}>
        <Typography variant='h4'>
          {title}
        </Typography>
        <div className={classes.tags}>
          {renderTags}
        </div>
      </div>
    </Paper>

  )
}

const styles = {
  wrapper: {
    display: 'flex',
    margin: 8,
    padding: 8,

  },
  text: {
    // marginRight: 8,
    marginLeft: 16,
  },
  chip: {
    marginRight: 5,
  },
  img: {
    maxWidth: 100,
  }
}

export default withStyles(styles)(AboutItem)