import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import moment from 'moment'// import Moment from 'react-moment';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Payment.css'


class Payment extends Component {

    state = {
        pick_up_date: "",
        drop_off_date: "",
        rv_id: 0,
        user_id: 0,
        price: 0,
        priceToCharge: 0,
    }
    componentDidMount() {
        // this.getDays();
        // this.infoToSend()
        this.getInfo();
        this.handlePaymentPrice();
    }

    getInfo = () => {

        if (this.props.update === true) {
            return this.setState({
                pick_up_date: this.props.pick_up_date,
                drop_off_date: this.props.drop_off_date,
                reservation_id: this.props.reservation_id,
                price: this.props.updated_price,
                priceToCharge: this.props.priceDifference

            })

        } else {
            let date1 = moment(this.props.match.params.start);
            let date2 = moment(this.props.match.params.return);
            let daysOfRental = date2.diff(date1, 'days')
            let costOfRental = daysOfRental * 100;
            return this.setState({
                pick_up_date: moment(this.props.match.params.start).format("LL"),
                drop_off_date: moment(this.props.match.params.return).format("LL"),
                rv_id: this.props.match.params.id,
                user_id: this.props.reduxState.user.id,
                price: costOfRental,
                priceToCharge: costOfRental
            })
                ;

        }

    }

    handlePaymentPrice = () => {
        if (this.props.update === true) {
            return this.state.priceToCharge;
        }
        else {
            return this.state.priceToCharge
        }
    }

    infoToSend = () => {
        if (this.props.update === true) {
            this.props.dispatch({
                type: 'UPDATE_RESERVATION',
                payload: this.state
            })
            window.location.reload();
        }
        else {
            this.props.dispatch({
                type: 'POST_RESERVATION',
                payload: this.state,
            })
            this.props.history.push('/confirmation');
        }
    }



    render() {
        return (
            <>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper >
                            <div>
                                <h1>Reservation Details</h1>
                            </div>
                            <div>
                                <ul key={this.props.reduxState.user.id}>
                                    <li>USERNAME: {this.props.reduxState.user.username}</li>
                                    <li>EMAIL: {this.props.reduxState.user.email_address}</li>
                                    <li>PICK UP DATE: {this.state.pick_up_date}</li>
                                    <li>DROP OFF DATE: {this.state.drop_off_date}</li>
                                    <li>PRICE: ${this.state.priceToCharge}</li>

                                </ul>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <div className="center">

                                <h1>Payment Information</h1>


                                <PayPalButton
                                    amount={this.state.priceToCharge}
                                    onSuccess={this.infoToSend}
                                    options={{
                                        clientId: "AXCASsmgV6MsT_nDnj_QgM-9WWhmTwnqtKeApa8-TjXqfCkGl5u3ObxIL_rLkhNeeJcv-k0DAHeaCVZn"
                                    }}
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Payment);