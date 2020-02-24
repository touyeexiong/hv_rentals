import { connect } from 'react-redux';
import React, { Component } from 'react';
import './Confirmation.css'

class Confirmation extends Component {

    handleClick = () => {
        this.props.history.push('/dashboard')

    }

    render() {
        return (
            <><div className="center">
                <h1>THANKS FOR BOOKING WITH HV RENTAL!</h1>
                <p>We hope you enjoy your trip!!!</p>
                <button onClick={this.handleClick}>Click Here To View Your Reservation Details</button>
            </div>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Confirmation)