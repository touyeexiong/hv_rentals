import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';
import ImageGallery from 'react-image-gallery'
import {useTheme } from '@material-ui/styles'
import {ThemeProvider} from '@material-ui/styles'
import {styled} from '@material-ui/styles'

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});


class Home extends Component {
    state = {
        open: true
    }
    render() {
        
        return (
            <>


                <h1>We at Home now</h1>
                
                <MyButton color="primary">Testing</MyButton>
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
            </>
        )
    }
}

export default Home;