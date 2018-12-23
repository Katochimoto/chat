import { connect } from 'react-redux'
import * as selectors from '@/data/selectors'
import Component from '@/components/MessageItemUser'

const mapStateToProps = (state, props) => {
  const user = selectors.selectUser(props.userId)(state)
  return { user }
}

const MessageItemUser = connect(
  mapStateToProps,
)(Component)

export default MessageItemUser
