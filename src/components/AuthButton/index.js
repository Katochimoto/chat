import { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class AuthButton extends Component {
  state = {
    open: false,
    userName: '',
  }

  handleClickOpen = () => {
    this.props.handleResetAuthStatus()
    this.setState({ open: true, userName: '' })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleLogin = () => {
    if (!this.state.userName) {
      return
    }

    this.props.handleLogin({
      name: this.state.userName,
    })
  }

  handleLogout = () => {
    this.props.handleLogout(this.props.auth.user)
  }

  handleChangeUserName = (event) => {
    this.setState({ userName: event.target.value })
  }

  componentDidMount () {
    this.props.handleCheckAuth()
  }

  componentDidUpdate () {
    if (this.props.auth.user && this.state.open) {
      this.setState({ open: false })
    }
  }

  render() {
    const isLoggedIn = Boolean(this.props.auth.user)
    const isError = this.props.auth.status === 'error'
    const errorMessage = isError && this.props.auth.message

    const button = do {
      if (isLoggedIn) {
        <Button color="inherit" onClick={this.handleLogout}>
          Logout
        </Button>
      } else {
        <Button color="inherit" onClick={this.handleClickOpen}>
          Login
        </Button>
      }
    }

    return (
      <div>
        {button}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter chat</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To enter the chat you must specify your name.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              error={isError}
              value={this.state.userName}
              helperText={errorMessage}
              onChange={this.handleChangeUserName}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Enter
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

AuthButton.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleCheckAuth: PropTypes.func.isRequired,
  handleResetAuthStatus: PropTypes.func.isRequired,
  auth: PropTypes.object,
}
