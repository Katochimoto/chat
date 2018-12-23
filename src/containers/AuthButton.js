import { connect } from 'react-redux'
import * as selectors from '@/data/selectors'
import * as actions from '@/data/actions'
import Component from '@/components/AuthButton'

const mapStateToProps = state => {
  const auth = selectors.selectAuth(state)
  return { auth }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => {
    dispatch(actions.userLogin(user))
  },
  handleLogout: (user) => {
    dispatch(actions.userLogout(user))
  },
  handleCheckAuth: (user) => {
    dispatch(actions.checkAuth(user))
  },
  handleResetAuthStatus: () => {
    dispatch(actions.setUserAuthStatus())
  },
})

const AuthButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default AuthButton
