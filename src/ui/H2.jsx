import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const H2 = ({ children, classes }) => {
  return (
    <Typography
      variant='h2'
      align='left'
      className={classes.font}
    >

      {children}

    </Typography>
  )
}


const styles = {
  font: {
    marginBottom: '1rem',
  }
}

export default withStyles(styles)(H2)