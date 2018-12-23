import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  root: {
    display: 'inline',
  },
})

function MessageItemUser (props) {
  const { user, classes } = props

  if (!user) {
    return null
  }

  return (
    <Typography
      variant="subtitle2"
      component="span"
      color="textPrimary"
      className={classes.root}
    >
      {user.name} ({user.online ? 'online' : 'offline'})
    </Typography>
  )
}

MessageItemUser.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
}

export default withStyles(styles)(MessageItemUser)
