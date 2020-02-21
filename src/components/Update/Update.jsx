import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Popup from 'reactjs-popup';
import './Update.css'
import Payment from '../Payment/Payment'

class Update extends Component {
    state = {
        startDate: '',
        returnDate: '',
        updated_price: 0,
        reservation_id: 0,
        priceDifference: 0,
        inUpdate: true,
    }

    componentDidMount() {
        this.getReserById();
        this.handleNewPrice();
        this.props.dispatch({
            type: 'FETCH_RESERVED_ALREADY',
            payload: Number(this.props.match.params.rv_id)
        })
    }

    getReserById = () => {
        console.log('this is reserbyid', this.props.match.params.id);

        this.props.dispatch({
            type: 'FETCH_RESERVATION_BY_ID',
            payload: Number(this.props.match.params.id)
        })
    }

    getReservation = () => {
        console.log('we working in dashboard');
        this.props.dispatch({
            type: 'FETCH_RESERVATION',
            payload: this.props.reduxState.user.id
        })
    }

    handleNewPrice = () => {
        let date1 = moment(this.state.startDate);
        let date2 = moment(this.state.returnDate);
        let daysOfRental = date2.diff(date1, 'days')
        console.log(daysOfRental);
        let updated_price = 100 * daysOfRental
        this.setState({

            startDate: this.state.startDate,
            returnDate: this.state.returnDate,
            updated_price: updated_price,
            reservation_id: this.props.match.params.id

        })
        this.handlePaymentToggle(updated_price);
    }

    handlePaymentToggle = (newPrice) => {
        let originalPrice = this.props.reduxState.reserById.total_price
        if (newPrice > originalPrice) {
            console.log('newPrice is higher', newPrice);
            this.setState({
                priceDifference: newPrice - originalPrice
            })
        }
    }

    handleDateChangeFor = dateSelections => (event) => {
        let rv = this.props.reduxState.reservationByRv;

        for (let i = 0; i < rv.length; i++) {
            let dateToCheck = moment(rv[i].pick_up_date).format("LL");
            let dateToCheck2 = moment(rv[i].drop_off_date).format("LL")
            let oldDateToCheck = moment(this.props.reduxState.reserById.pick_up_date).format("LL")
            let oldDateToCheck2 = moment(this.props.reduxState.reserById.drop_off_date).format("LL")
            let selectedStartDate = moment(event.target.value).format("LL")

            if (moment(event.target.value).isBetween(oldDateToCheck, oldDateToCheck2) || selectedStartDate === oldDateToCheck || selectedStartDate === oldDateToCheck2) {
                return this.setState({ [dateSelections]: event.target.value })
            }
            else if (moment(event.target.value).isBetween(dateToCheck, dateToCheck2) || selectedStartDate === dateToCheck || selectedStartDate === dateToCheck2) {
                alert('The date of ' + selectedStartDate + ' is not available. Please select another date')
                this.setState({
                    [dateSelections]: ''
                })
                return false;
            }

        }
        this.setState({
            [dateSelections]: event.target.value
        })
    }

    render() {
        console.log('old price: ', this.props.reduxState.reserById.total_price);
        console.log('new price: ', this.state.updated_price);
        console.log(this.state);



        return (
            <>
                <h1>UPDATE RESERVATION</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>YOUR RESERVATION ID</td>
                                <td>RV</td>
                                <td>RV DESCRIPTION</td>
                                <td>PICK UP DATE</td>
                                <td>RETURN DATE</td>
                                <td>TOTAL PRICE</td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>{this.props.reduxState.reserById.id}</td>
                                <td>{this.props.reduxState.reserById.rv_name}</td>
                                <td>{this.props.reduxState.reserById.rv_description}</td>
                                <td>{moment(this.props.reduxState.reserById.pick_up_date).format("LL")}</td>
                                <td>{moment(this.props.reduxState.reserById.drop_off_date).format("LL")}</td>
                                <td>$ {this.props.reduxState.reserById.total_price}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    NEW PICK UP DATE
                                <input
                                        type='date'
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.handleDateChangeFor('startDate')} /></td>
                                <td>
                                    NEW RETURN DATE
                                <input
                                        type='date'
                                        name="returnDate"
                                        value={this.state.returnDate}
                                        onChange={this.handleDateChangeFor('returnDate')} /></td>
                                <td>$ {this.state.updated_price || 0}</td>
                                <td><button onClick={this.handleNewPrice}>CLICK TO CHECK PRICES</button></td>
                                <td><button onClick={this.handleUpdate}>UPDATE</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>ALREADY RESERVED DATES</h1>
                    <table>
                        <thead>
                            <tr>
                                <td>PICK UP DATE</td>
                                <td>DROP OFF DATE</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxState.reservationByRv.map((rv) => {
                                return (
                                    <tr key={rv.id}>
                                        <td></td>
                                        <td>{moment(rv.pick_up_date).format("LL")}</td>
                                        <td>{moment(rv.drop_off_date).format("LL")}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>

                </div>
                <Popup trigger={<button>Update</button>} modal>
                    <Payment
                        update={this.state.inUpdate}
                        reservation_id={this.props.reduxState.reserById.id}
                        pick_up_date={this.state.startDate}
                        drop_off_date={this.state.returnDate}
                        updated_price={this.state.updated_price}
                        priceDifference={this.state.priceDifference}
                    />
                </Popup>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Update);