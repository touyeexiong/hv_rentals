import React, { Component } from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import { Slide } from 'material-auto-rotating-carousel';
import { red } from '@material-ui/core/colors';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Home.css';

class Home extends Component {
    state = {
        open: true
    }
    render() {

        return (
            <>
                {/* <img alt="main rv" src="https://i.ebayimg.com/images/g/TaEAAOSwJj1cz67N/s-l1600.jpg" /> */}
                {/* <AutoRotatingCarousel
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
                        media={<img alt="main rv" src="https://i.ebayimg.com/images/g/KdQAAOSwSv9cz67P/s-l1600.jpg" />}
                    />

                </AutoRotatingCarousel> */}

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={3}
                    className="div"
                    isPlaying="true"
                >

                    <Slider>
                        <Slide index={0}><img alt="main rv" src="https://i.ebayimg.com/images/g/TaEAAOSwJj1cz67N/s-l1600.jpg" /></Slide>
                        <Slide index={1}><img alt="main rv" src="https://i.ebayimg.com/images/g/KdQAAOSwSv9cz67P/s-l1600.jpg" /></Slide>
                        <Slide index={2}><img alt="main rv" src="https://www.ridecdn.com/www.freedomrvaz.com/uploads/Forester.png" /></Slide>
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            
            </>
        )
    }
}

export default Home;