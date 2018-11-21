import React from 'react'
// import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const TypographyDemo = () => {
  return(
    <div>
      <Typography variant='h1'>
        Heading Level 1
      </Typography>
      <Typography variant='h2'>
        Heading Level 2
      </Typography>
      <Typography variant='h3'>
        Heading Level 3
      </Typography>
      <Typography variant='h4'>
        Heading Level 4
      </Typography>
      <Typography variant='h4'>
        Heading Level 5
      </Typography>
      <Typography variant='h6'>
        Heading Level 6
      </Typography>
      <Typography variant='subtitle1'>
        Subtitle Level 1
      </Typography>
      <Typography variant='subtitle2'>
        Subtitle Level 2
      </Typography>
      <Typography variant='body1'>
        Body level 1
      </Typography>
      <Typography variant='body2'>
        Body level 1
      </Typography>
      <Typography variant='caption'>
        Caption text
      </Typography>
      <Typography variant='overline'>
        Overline text
      </Typography>
    </div>
  )
}

export default TypographyDemo