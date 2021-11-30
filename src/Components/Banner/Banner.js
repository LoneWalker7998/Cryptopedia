import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import Carousel from './Carousel'


const useStyles = makeStyles(() => ({
    banner:{
        backgroundImage: "url(./banner.jpg)"
    },

    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },

    tagline:{
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}))

const Banner = () => {
    const classes = useStyles()

    return (
        <div className = {classes.banner}> 
            <Container className = {classes.bannerContent}>
                <div className = {classes.tagline}>
                    <Typography
                        variant = "h3"
                        style = {{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat"
                        }}
                    
                    
                    >
                        Trending Coins
                    </Typography>
                    <Typography
                        variant = "subtitle2"
                        style= {{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat"
                        }}
                    >
                        Get all the information regarding your favourite Crypto currency.
                    </Typography>
                </div>
                <Carousel />
            </Container>
        
        </div>
    )
}

export default Banner
