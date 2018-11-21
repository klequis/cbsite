import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const H1 = ({ children, classes }) => {

  return (
    <Typography
      variant='h1'
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

export default withStyles(styles)(H1)