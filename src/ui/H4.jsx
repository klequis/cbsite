import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const H4 = ({ children, classes }) => {
  return (
    <Typography
      variant='h4'
      align='center'
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

export default withStyles(styles)(H4)