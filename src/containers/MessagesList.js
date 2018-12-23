import { connect } from 'react-redux'
import * as selectors from '@/data/selectors'
import * as actions from '@/data/actions'
import Component from '@/components/MessagesList'

const mapStateToProps = state => {
  const auth = selectors.selectAuth(state)
  const messages = selectors.selectMessages(state)
  return {
    auth,
    messages,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (fromMessage) => {
    dispatch(actions.fetchMessages(fromMessage))
  },
})

const MessagesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)

export default MessagesList
