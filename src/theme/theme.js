import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[700],
            dark: teal[900]
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