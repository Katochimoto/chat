import { connect } from 'react-redux'
import * as selectors from '@/data/selectors'
import Component from '@/components/Chart'

const mapStateToProps = state => {
  const showUsersList = selectors.selectShowUsersList(state)
  return { showUsersList }
}

const mapDispatchToProps = () => ({
})

const Chart = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Chart
