import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[600],
            dark: teal[800]
        },
        secondary: {
            main: "#0097a7"
        }
    },

    typography: {
        fontFamily: ['Montserrat'].join(',')
    },

});

export default theme;