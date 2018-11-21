import React from 'react'
import { Typography } from '@material-ui/core'

const Title = ({ children, marginBottom=0 }) => {
  return (
    <Typography
      variant='h2'
      align='center'
      style={{ marginBottom: marginBottom }}
    >

      {children}

    </Typography>
  )
}

export default Title