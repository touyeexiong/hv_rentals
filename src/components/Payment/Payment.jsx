import { connect } from 'react-redux';
import React, {Component} from 'react';
import {PayPalButton} from 'react-paypal-button-v2';
// import Moment from 'react-moment';
import moment from 'moment'

class Payment extends Component {

    state={
        pick_up_date: "",
        drop_off_date: "",
        rv_id: 0,
        user_id: 0,
    }
    componentDidMount() {
        // this.getDays();
        // this.infoToSend()
        this.getInfo();
    }
    getInfo = () => {
        let date1 = moment(this.props.match.params.start);
        let date2 = moment(this.props.match.params.return);
        let daysOfRental = date2.diff(date1, 'days')
        console.log(daysOfRental);
        let costOfRental = daysOfRental * 100;
        console.log(costOfRental);
        this.setState({
            pick_up_date: moment(this.props.match.params.start).format("LL"),
            drop_off_date: moment(this.props.match.params.return).format("LL"),
            rv_id: this.props.match.params.id,
            user_id: this.props.reduxState.user.id,
            total_price: costOfRental
        })
    }

    infoToSend = () => {

        console.log(this.state);
        this.props.dispatch({
            type: 'POST_RESERVATION',
            payload: this.state,
        })
        this.props.history.push('/confirmation');
}
    
    render () {
        console.log(this.state);
        
        return (
            <>
            <div><h1>Payment Information</h1>
            </div>
            <div>
                <h1>Reservation Details</h1>
            </div>
            <PayPalButton 
            amount = {this.state.total_price}
            onSuccess={this.infoToSend
                
                // (details, data) => {
            //     alert("Transaction completed by " + details.payer.name.given_name);
            // return fetch("/paypal-transaction-complete", {
            //     method: "post",
            //     body: JSON.stringify({
            //         orderID: data.orderID
            //     })
                
            // })

            // }
        }
                    options={{
                        clientId: "AVARjokO8VkezyxtptyBQ6v4cUqQ9_WjGriD21T-fn1BwDrcDaq9tDsTHGAoA1BCbfPnI2exJBoZe7Z-"
                    }}
            
            />
            
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Payment);