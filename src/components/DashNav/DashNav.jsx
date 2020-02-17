import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class DashNav extends Component {
    render() {
        return (
            <>
            <Link to="/dashboard">
                <h2>My Reservations</h2>
            </Link>
            <Link to="/profile">
                <h2>Profile</h2>
            </Link>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DashNav);