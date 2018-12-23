import { connect } from 'react-redux'
import * as selectors from '@/data/selectors'
import * as actions from '@/data/actions'
import Component from '@/components/MessageForm'

const mapStateToProps = state => {
  const auth = selectors.selectAuth(state)
  const online = selectors.selectOnline(state)
  return { auth, online }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage: (message) => {
    dispatch(actions.sendMessage(message))
  },
})

const MessageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default MessageForm
