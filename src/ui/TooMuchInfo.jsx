import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AboutItem from 'ui/elements/AboutItem'
import iMS from 'ui/media/ms01.png'

const TooMuchInfo = (props) => {
  return (
    <div>
    <Typography variant='h4'>
            Companies / Organizations
          </Typography>
          <AboutItem
            title='TriValley Coders'
            tags={['Mentoring', 'Education', 'Networking']}
          />
          <AboutItem title='Morgan Stanley' image={iMS} />
          <AboutItem
            title='NYC WPF & Silverlight Meetup'
            tags={['Co-organizer', 'Presenter']}
          />
          <AboutItem title='Ontel Coproration' />

          <Typography variant='h4'>
            Projects
          </Typography>
          <AboutItem
            title='Key'
            tags={['Documentum editing & workflow', 'ASP.NET', 'Verity', 'Architect', 'Development Manager']}
          />
          <AboutItem title='Thomson Reuters Linking' />
          <AboutItem
            title='Morgan Stanley Author'
            tags={['what was it']}
          />

          <Typography variant='h4'>
            Technologies
          </Typography>
          <Typography variant='h1'>
            Currently Active
          </Typography>
          <AboutItem title='Crystal Reports' />
          <AboutItem title='Sybase' />
          <AboutItem title='MySql' />
          <AboutItem title='SQL' />
          <AboutItem title='MongoDB' />

          <Typography variant='h5'>
            Pervious
          </Typography>
          <AboutItem title='Documentum' />
          <AboutItem title='VisualBasic 4 - 6' />
          <AboutItem title='C#' />
          <AboutItem title='Verity' />
          <AboutItem title='WPF' />
          <AboutItem title='Silverlignt' />
          <AboutItem title='ASP .NET' />
          <AboutItem title='Microsoft Office Developer' />

          <Typography variant='h5'>
            Skills
          </Typography>
          <AboutItem title='Product Manager' />
          <AboutItem title='Certified Project Manager (former)' />

          <Typography variant='h4'>
            Education
          </Typography>
          <AboutItem
            title='St Johns University Tobin College of Business'
            tags={['BS Econamics', 'Cuma Sum ...', '']}
          />

          <Typography variant='h4'>
            Outside of Work
          </Typography>
          <AboutItem
            title='Built 2 drones'
          />
          <AboutItem
            title='Photography'
          />

          {/* Not in category */}






          <AboutItem
            title='Stanwood Farms'
            tags={['Owner', 'Equitation Instructor', 'Trainer']}
          />

          <AboutItem
            title='Coalition for Asian American Children & Famlies'
            tags={['Board Member']}
          />
          <AboutItem
            title='Data'
            tags={['CRM', 'Equity Holdings', 'Equity', 'Convertible Bonds']}
          />
          <AboutItem
            title='Excel Guru - Financial Model Automation'
          />

          <AboutItem title='Express' />
          <AboutItem
            title='Membership'
            tags={['linux groups', 'MS', 'SJU', '?', 'Morgan Stanley Network']}
          />
          <AboutItem title='HKNC' />

          <Typography variant='h4'>
            What I'm Good At
          </Typography>
          <ul>
            <li>Product Managment</li>
            <li>Software Integration</li>
            <li>Making Software</li>
            <li>Requirements Analysis</li>
            <li>Implmentation of firm branding</li>
          </ul>
    </div>
  )
}

const styles = {

}

export default withStyles(styles)(TooMuchInfo)