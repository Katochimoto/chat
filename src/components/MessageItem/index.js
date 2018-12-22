import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  },
})

function MessageItem (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle2"
        component="span"
        className={classes.title}
        color="textPrimary"
      >
        Anton (online) 13213121123123:
      </Typography>
      <Typography variant="body1" component="span" color="textPrimary">
        Ill be in your neighborhood doing errands this…
      </Typography>
    </div>
  )
}

MessageItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MessageItem)
