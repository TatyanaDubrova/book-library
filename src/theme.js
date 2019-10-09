import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 1024,
            md: 1024,
            lg: 1440,
            xl: 1920
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'Muli, sans-serif',
    },
    palette: {
        primary: {
            light: '#08c', //do not change
            main: '#043C68', //do not change
            dark: '#333333', //do not change
            contrastText: '#04376C'
        },
        secondary: {
            light: '#00bcd4', // do not change
            main: '#FFAD00', // do not change
            dark: '#A62F00', // do not change
            contrastText: '#000'
        }
    },
    overrides: {
        MuiTypography: {
            body1: {
                fontSize: '14px'
            }
        },
        MuiDivider: {
            middle: {
                marginLeft: 0,
                marginRight: 0,
                marginTop: 20,
                marginBottom: 8,
            }
        },
        MuiBox: {
            root: {
                padding: 20,
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: '1rem',
                padding: '4px 12px'
            }
        },
    }
});
