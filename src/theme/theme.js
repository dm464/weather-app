import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00796b"
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