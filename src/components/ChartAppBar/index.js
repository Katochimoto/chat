import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AuthButton from '@/containers/AuthButton'
import MenuButton from '@/containers/MenuButton'

const styles = {
  root: {
    zIndex: 1,
  },
  grow: {
    flexGrow: 1,
  },
}

function ChartAppBar (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Chart
          </Typography>
          <AuthButton />
        </Toolbar>
      </AppBar>
    </div>
  )
}

ChartAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChartAppBar)
