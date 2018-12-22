import PropTypes from 'prop-types'
import UsersList from '@/components/UsersList'

import style from './index.css'

export default function Chart () {
  return (
    <div className={style.chart}>
      <UsersList />
    </div>
  )
}

Chart.propTypes = {
  status: PropTypes.string,
}

Chart.defaultProps = {}
