import PropTypes from 'prop-types'
import UsersList from '@/components/UsersList'
import MessagesList from '@/components/MessagesList'

import style from './index.css'

export default function Chart () {
  return (
    <div className={style.chart}>
      <UsersList />
      <MessagesList />
    </div>
  )
}

Chart.propTypes = {
  status: PropTypes.string,
}

Chart.defaultProps = {}
