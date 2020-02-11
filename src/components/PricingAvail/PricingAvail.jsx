import React, {Component} from 'react';
import {connect} from 'react-redux';
import PricingAvailItem from '../PricingAvailItem/PricingAvailItem'

class PricingAvail extends Component {

    componentDidMount () {
        // getRVs();
    }

    // getRVs = () => {
    //     this.props.dispatch({
    //         type: 'FETCH_RVS'
    //     })
    // }

    render() {
        return (
            <>
            <h1>we in Pricing and Availability</h1>
            <PricingAvailItem />
            </>
        )
    }
}


export default PricingAvail;