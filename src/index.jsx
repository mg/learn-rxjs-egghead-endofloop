import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import Video6 from './video06'

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='v6'/>
      <Route path='v6' component={Video6} />
    </Route>
  </Router>
), document.getElementById('app'))
