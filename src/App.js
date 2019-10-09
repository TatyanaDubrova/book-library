import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Routes from './routes'
import { store, history } from './store'

import { theme } from './theme'

function App() {
  return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes/>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>)
}

export default App;
