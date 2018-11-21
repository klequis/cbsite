import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      light: '#ff5572',
      main: '#dc0747',
      dark: '#a30021',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#64b5f6',
    //   main: '#fff',
    //   dark: '#1976d2',
    //   contrastText: '#000',
    // },
  },
  typography: {
    fontFamily: '"Source Sans Pro", Helvetica, sans-serif ',
    h1: {
      fontSize: '3.5rem',
      lineHeight: 1.65,
    },
    h2: {
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h4: {
      fontSize: '1.1rem',
      lineHeight: 1.375
    },
    h5: {
      fontSize: '0.9rem',
      lineHeight: 1.375
    },
    h6: {
      fontSize: '0.7rem',
      lineHeight: 1.375
    },
    body1: {
      fontFamily: '"Source Sans Pro Light", Helvetica, sans-serif ',
      fontSize: '1.25rem',
      lineHeight: 1.65,
      fontWeight: 300,
    },
    body2: {
      fontFamily: '"Source Sans Pro Light", Helvetica, sans-serif ',
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 300,
    },
    useNextVariants: true,
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot