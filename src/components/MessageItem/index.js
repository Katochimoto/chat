import { DateTime } from 'luxon'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MessageItemUser from '@/containers/MessageItemUser'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  },
  inline: {
    display: 'inline',
  },
})

function MessageItem (props) {
  const { classes, message } = props

  return (
    <div className={classes.root}>
      <MessageItemUser userId={message.userId} />
      &nbsp;
      <Typography
        variant="subtitle2"
        component="span"
        color="textPrimary"
        className={classes.inline}
      >
        {DateTime.fromMillis(message.timestamp).toLocaleString(DateTime.DATETIME_SHORT)}:
      </Typography>

      <Typography variant="body1" component="span" color="textPrimary">
        {message.message}
      </Typography>
    </div>
  )
}

MessageItem.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

export default withStyles(styles)(MessageItem)
