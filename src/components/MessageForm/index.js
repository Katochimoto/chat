import { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import AttachFileIcon from '@material-ui/icons/AttachFile'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  textField: {
    flex: '1',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  sendButton: {
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  attachButton: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
})

class MessageForm extends Component {
  state = {
    message: '',
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  handleClickSend = () => {
    this.props.handleSendMessage(this.state.message)
    this.setState({ message: '' })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <IconButton className={classes.attachButton} color="default" aria-label="Attach">
          <AttachFileIcon />
        </IconButton>
        <TextField
          label="Message"
          multiline
          rowsMax="3"
          value={this.state.message}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <IconButton
          className={classes.sendButton}
          color="default"
          aria-label="Send"
          onClick={this.handleClickSend}
        >
          <SendIcon />
        </IconButton>
      </form>
    )
  }
}

MessageForm.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  handleSendMessage: PropTypes.func.isRequired,
}

export default withStyles(styles)(MessageForm)
