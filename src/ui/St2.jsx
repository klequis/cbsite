import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const St2 = ({ children, classes }) => {
  return (
    <Typography
      variant='body1'
      align='left'
      className={classes.font}
    >

      {children}

    </Typography>
  )
}


const styles = {
  font: {
    fontSize: '1.25rem',
    lineHeight: 1.65,
    fontStyle: 'italic',
    marginTop: '-0.65rem',
    marginBottom: '1.5rem',
  }
}

export default withStyles(styles)(St2)