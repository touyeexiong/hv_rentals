import { connect } from 'react-redux';
import React, {Component} from 'react';

class Payment extends Component {
    
    render () {
        console.log(this.props.match);
        
        return (
            <>
            <div><h1>Payment Information</h1>
            </div>
            <div>
                <h1>Reservation Details</h1>
            </div>
            </>
        )
    }
}

export default Payment;