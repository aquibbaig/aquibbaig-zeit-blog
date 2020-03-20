import React from 'react';
import Navbar from './Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: grey
  }
})

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      {props.children}
    </ThemeProvider>
  )
}