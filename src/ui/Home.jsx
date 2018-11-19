import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LeftRightSection from 'ui/LeftRightSection'
import iTeaching from 'ui/media/teaching.jpg'
import iMS from 'ui/media/ms01.png'
import iMSNarrow from 'ui/media/ms01-narrow.png'

// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const Title = ({ children }) => {
  return (<Typography variant='h4' align='center'>{children}</Typography>)
}

const Home = (props) => {
  const { classes } = props
  return (
    <div>
      <LeftRightSection image={iTeaching} imageSide='left'>
        <Title>Teaching</Title>
      </LeftRightSection>
      <LeftRightSection image={iTeaching} imageSide='right'>
      <Title>Teaching</Title>
      </LeftRightSection>
      <LeftRightSection image={iMS} imageSide='left'>
        <Title>MS Tall</Title>
      </LeftRightSection>
      <LeftRightSection image={iMSNarrow} imageSide='right'>
        <Title>MS Narrow</Title>
      </LeftRightSection>
    </div>
  )
}

const styles = {}

export default withStyles(styles)(Home)