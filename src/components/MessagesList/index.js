import { Component, createRef } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MessageForm from '@/containers/MessageForm'
import MessageItem from '@/components/MessageItem'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    backgroundColor: theme.palette.background.paper,
    borderLeft: '1px solid #eee',
  },

  list: {
    flex: '1',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
})

class MessagesList extends Component {

  scrollParentRef = createRef()

  componentDidMount () {
    this.props.fetchMessages()
  }

  render() {
    const { classes } = this.props

    const loadFunc = () => {}
    const items = this.props.messages.map((item, index) => (
      <MessageItem key={index} message={item} />
    ))

    return (
      <div className={classes.root}>
        <div
          ref={this.scrollParentRef}
          className={classes.list}
        >
          <InfiniteScroll
            isReverse={true}
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            useWindow={false}
            getScrollParent={() => this.scrollParentRef.current}
          >
            {items}
          </InfiniteScroll>
        </div>
        <MessageForm />
      </div>
    )
  }
}

MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  fetchMessages: PropTypes.func.isRequired,
}

export default withStyles(styles)(MessagesList)
