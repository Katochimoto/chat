import { connect } from 'react-redux'
import * as actions from '@/data/actions'
import Component from '@/components/MenuButton'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  toggleUsersList: () => {
    dispatch(actions.toggleUsersList())
  },
})

const MenuButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default MenuButton
