import { connect } from 'react-redux';
import React, { Component } from 'react';

class Confirmation extends Component {

    handleClick = () => {
        this.props.history.push('/dashboard')
        
    }

    render () {
        return (
            <>
            <h1>THANKS FOR BOOKING WITH HV RENTAL!</h1>
            <p>We hope you enjoy your trip!!!</p>
            <button onClick={this.handleClick}>Reservation Details</button>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Confirmation)