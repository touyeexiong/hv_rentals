import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Popup from 'reactjs-popup';
import './Update.css'
import Payment from '../Payment/Payment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
        return (
            <>
                <h1>UPDATE RESERVATION</h1>
                <div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>YOUR RESERVATION ID</TableCell>
                                    <TableCell>RV</TableCell>
                                    <TableCell>RV DESCRIPTION</TableCell>
                                    <TableCell>PICK UP DATE</TableCell>
                                    <TableCell>RETURN DATE</TableCell>
                                    <TableCell>TOTAL PRICE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell>{this.props.reduxState.reserById.id}</TableCell>
                                    <TableCell>{this.props.reduxState.reserById.rv_name}</TableCell>
                                    <TableCell>{this.props.reduxState.reserById.rv_description}</TableCell>
                                    <TableCell>{moment(this.props.reduxState.reserById.pick_up_date).format("LL")}</TableCell>
                                    <TableCell>{moment(this.props.reduxState.reserById.drop_off_date).format("LL")}</TableCell>
                                    <TableCell>$ {this.props.reduxState.reserById.total_price}</TableCell>
                                </TableRow>
                                <TableRow>
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
                                </TableRow>
                                <TableRow>
                                    <td>$ {this.state.updated_price || 0}</td>
                                    <button onClick={this.handleNewPrice}>CLICK TO CHECK PRICES</button>
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
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                                        <td>{moment(rv.pick_up_date).format("LL")}</td>
                                        <td>{moment(rv.drop_off_date).format("LL")}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>

                </div>

            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Update);