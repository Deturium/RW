import dva from 'dva'
import createBrowserHistory from 'history/createBrowserHistory'

import React from 'react'
import { render } from 'react-dom'


// 1. Initialize
const app = dva({
  history: createBrowserHistory()
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/User').default);
app.model(require('./models/Recite').default);

// 4. Router
app.router(require('./router').default)

// 5. Start
const App = app.start()

const root = document.getElementById('root')

if (process.env.NODE_ENV === 'development') {
  const RedBox = require('redbox-react').default
  try {
    render(<App />, root)
  } catch (e) {
    render(<RedBox error={e} />, root)
  }
} else {
  render(<App />, root)
}
