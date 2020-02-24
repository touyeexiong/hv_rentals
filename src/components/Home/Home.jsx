import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';
import ImageGallery from 'react-image-gallery'
import {useTheme } from '@material-ui/styles'
import {ThemeProvider} from '@material-ui/styles'
// import {createMuiTheme} from '@material-ui/styles'

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             light: '#757ce8',
//             main: '#3f50b5',
//             dark: '#002884',
//             contrastText: '#fff',
//         },
//         secondary: {
//             light: '#ff7961',
//             main: '#f44336',
//             dark: '#ba000d',
//             contrastText: '#000',
//         },
//     },
// });

class Home extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <>
            <ThemeProvider >


                <h1>We at Home now</h1>
                
                <Button color="primary">Testing</Button>
                <img alt="main rv" src="https://i.ebayimg.com/images/g/TaEAAOSwJj1cz67N/s-l1600.jpg" />
                <AutoRotatingCarousel 
                style={{ position: 'absolute' }}
                open={this.state.open}
                onStart={() => this.setState({ open: false })}
                onClose={() => this.setState({ open: false })}
                >
                    <Slide
                        media={<img alt="main rv" src="https://i.ebayimg.com/images/g/TaEAAOSwJj1cz67N/s-l1600.jpg" />}
                        mediaBackgroundStyle={{ background: red[400] }}
                        title="This is a test"
                        subtitle="we just testing"
                    />
                    <Slide
                        media={<img alt="main rv" src="https://i.ebayimg.com/images/g/TaEAAOSwJj1cz67N/s-l1600.jpg" />}
                    />

                </AutoRotatingCarousel>
            </ThemeProvider>
            </>
        )
    }
}

export default Home;