import React from 'react';
import ReactDOM from 'react-dom';
import TableContainer from './containers/TableContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const App = () => (
  <MuiThemeProvider>
    <TableContainer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
