import { connect } from 'react-redux'
import * as selectors from '@/data/selectors'
// import * as actions from '@/data/actions'
import Component from '@/components/UsersList'

const mapStateToProps = state => {
  const auth = selectors.selectAuth(state)
  const users = selectors.selectUsers(state)
  return {
    auth,
    users,
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   handleLogin: (user) => {
//     dispatch(actions.userLogin(user))
//   },
//   handleLogout: (user) => {
//     dispatch(actions.userLogout(user))
//   },
//   handleResetAuthStatus: () => {
//     dispatch(actions.setUserAuthStatus())
//   },
// })

const UsersList = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Component)

export default UsersList
