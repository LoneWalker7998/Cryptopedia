import { AppBar, 
        Container, 
        Toolbar, 
        Typography, 
        Select, 
        MenuItem, 
        makeStyles, 
        createTheme,
        ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { CryptoState } from '../CryptoContext'
const Header = () => {
    

    const useStyles = makeStyles(() => ({
        title: {
            flex: 1,
            color: "gold",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer",
        },
    }));

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type:'dark'
        }
    });

    const history = useHistory();
    const classes = useStyles()

    const {currency, setCurrency} = CryptoState()
    console.log(currency)

    return (
        <ThemeProvider theme = {darkTheme}>
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography 
                    onClick = {() => history.push('/')} 
                    className={classes.title}
                    variant = "h5"> 
                    Cryptopedia
                    
                    </Typography>

                    

                    <Select variant = "outlined"
                        style = {{
                            width: 100,
                            height: 40,
                            marginRight: 15
                        }} 
                        value = {currency}
                        onChange = {(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value = {"USD"}>USD</MenuItem>
                        <MenuItem value = {"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header
