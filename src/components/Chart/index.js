import UsersList from '@/containers/UsersList'
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
