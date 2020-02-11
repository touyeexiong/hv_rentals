import React, { Component } from 'react';
import { connect } from 'react-redux'

class PricingAvailItem extends Component {
    render() {
        return (
            <>
                <div><img src={this.props.imgPath} /></div>
                <div>{this.props.name}</div>
                <div>{this.props.des}</div>
                <button>Check Availability and Pricing</button>

            </>
        )
    }
}

export default PricingAvailItem;