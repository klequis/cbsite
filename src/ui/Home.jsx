import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LeftRightSection from 'ui/LeftRightSection'
import iTeaching from 'ui/media/teaching.jpg'
import iMS from 'ui/media/ms01.png'
import iMSNarrow from 'ui/media/ms01-narrow.png'

// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'


const Home = (props) => {
  const { classes } = props
  return (
    <div>
      <LeftRightSection image={iTeaching} imageSide='left' title='Teaching' />
      <LeftRightSection image={iTeaching} imageSide='right' title='Teaching' />
      <LeftRightSection image={iMS} imageSide='left' title='MS Tall' />
      <LeftRightSection image={iMSNarrow} imageSide='left' title='MS Narrow' />
    </div>
  )
}

const styles = {}

export default withStyles(styles)(Home)