import { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'

import Chart from '@/containers/Chart'
import NoMatch from '@/components/NoMatch'
import ChartAppBar from '@/components/ChartAppBar'

import style from './index.css'

export default function App () {
  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <div className={style.app}>
          <ChartAppBar />

          <Switch>
            <Route exact path="/" component={Chart} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}
