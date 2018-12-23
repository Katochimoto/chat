import { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  inline: {
    display: 'inline',
  },
})

class UsersList extends Component {

  render() {
    const {
      classes,
      users,
    } = this.props

    return (
      <List className={classes.root}>
        {users.map((item, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary=" — I'll be in your neighborhood doing errands this…"
            />
          </ListItem>
        ))}
      </List>
    )
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
}

export default withStyles(styles)(UsersList)
