import React, { Component } from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import { red } from '@material-ui/core/colors';

class Home extends Component {
    state = {
        open: true
    }
    render() {

        return (
            <>
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