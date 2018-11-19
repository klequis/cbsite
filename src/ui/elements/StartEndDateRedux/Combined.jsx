import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from 'material-ui-pickers'
import isBefore from 'date-fns/isBefore'
import { withStyles } from '@material-ui/core/styles'
import { InputAdornment } from '@material-ui/core'
import AlarmIcon from '@material-ui/icons/Alarm'
import EventIcon from '@material-ui/icons/Event'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

let startMinDate

class Combined extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDateTime: props.initial ? props.initial.startDateTime : null,
      endDateTime: props.initial ? props.initial.startDateTime : null,
    }
  }

  localOnChange = (date, control) => {
    let sd
    let ed
    if (control === 'startDateTime') {
      sd = date
      if (isBefore(ed, sd)) {
        ed = sd
      } else {
        ed = this.state.endDateTime
      }
    } else {
      sd = this.state.startDateTime
      ed = date
    }

    this.setState({
      startDateTime: sd,
      endDateTime: ed,
    })

    // calls redux-form onChange()
    this.props.onChange({
      startDateTime: sd,
      endDateTime: ed,
    })
  }
  render() {
    const { startDateTime, endDateTime, /*errorEndDate, errorStartDate*/ } = this.state
    const { classes } = this.props
    green('startDate', startDateTime)
    green('endDate', endDateTime)
    let minDate = new Date('2018-11-10T00:39:59')
    // if (startDateTime === null) {
    //   minDate = new Date()
    // } else {
    //   minDate = new Date(startDateTime)
    // }
    green('minDate', minDate)
    return (
      <div className={classes.wrapper}>
        <div className={classes.datesWrapper}>
          <DateTimePicker
            disablePast
            label='Start Date / Time'
            format={this.props.format}
            fullWidth
            className={classes.dateTimePicker}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' className={classes.adornment}>
                  <EventIcon />
                  <AlarmIcon />
                </InputAdornment>
              )
            }}
            minDate={new Date()}
            onChange={(date) => this.localOnChange(date, 'startDateTime')}
            required={true}
            value={startDateTime}
          />
          <DateTimePicker
            disablePast
            format={this.props.format}
            InputProps={{
                endAdornment: (
                  <InputAdornment position='end' className={classes.adornment}>
                    <EventIcon />
                    <AlarmIcon />
                  </InputAdornment>
                )
              }}
            label='End Date / Time'
            fullWidth
            className={classes.dateTimePicker}
            // minDate={startDateTime || new Date()}
            minDate={new Date('2018-11-10T00:39:59.703Z')}
            minDateMessage='End date must be after start date'
            onChange={(date) => this.localOnChange(date, 'endDateTime')}
            required={true}
            value={endDateTime}
          />
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  adornment: {
    padding: '3px 0',
  },
  datesWrapper: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  dateTimePicker: {
    paddingBottom: 20,
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap'
  },
})

export default withStyles(styles)(Combined)

Combined.propTypes = {
  initial: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string.isRequired,
}
