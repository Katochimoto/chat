import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    color: 'inherit',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function MenuButton (props) {
  const { classes, toggleUsersList } = props

  return (
    <IconButton
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
      onClick={toggleUsersList}
    >
      <MenuIcon />
    </IconButton>
  )
}

MenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleUsersList: PropTypes.func.isRequired,
}

export default withStyles(styles)(MenuButton)
