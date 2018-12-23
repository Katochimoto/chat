import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import SplitterLayout from 'react-splitter-layout'
import UsersList from '@/containers/UsersList'
import MessagesList from '@/containers/MessagesList'

const styles = () => ({
  root: {
    display: 'flex',
    flex: '1',
    position: 'relative',
  },
})

function Chart (props) {
  const { classes, width, showUsersList } = props

  if (isWidthUp('sm', width) && showUsersList) {
    return (
      <div className={classes.root}>
        <SplitterLayout
          percentage={true}
          primaryMinSize={20}
          secondaryMinSize={50}
          secondaryInitialSize={70}
        >
          <UsersList />
          <MessagesList />
        </SplitterLayout>
      </div>
    )
  }

  if (showUsersList) {
    return (
      <div className={classes.root}>
        <UsersList />
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <MessagesList />
      </div>
    )
  }
}

Chart.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string,
  showUsersList: PropTypes.bool,
}

export default withWidth()(withStyles(styles)(Chart))
