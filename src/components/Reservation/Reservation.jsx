import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Reservation.css'


class Reservation extends Component {

    state = {
        startDate: '',
        returnDate: '',
        conflict: '',
    }

    componentDidMount() {

        this.handleReservation();
        this.props.dispatch({
            type: 'FETCH_RVS'
        })
    }

    // need a function that compares startDate/returnDate against reservations
    // already made to check for conflicts

    handleDateChangeFor = dateSelections => (event) => {
        let rv = this.props.reduxState.reservationByRv;
        console.log(rv.length);


        for (let i = 0; i < rv.length; i++) {
            let dateToCheck = moment(rv[i].pick_up_date).format("LL");
            let dateToCheck2 = moment(rv[i].drop_off_date).format("LL")
            let selectedStartDate = moment(event.target.value).format("LL")
            if (moment(event.target.value).isBetween(dateToCheck, dateToCheck2) || selectedStartDate === dateToCheck || selectedStartDate === dateToCheck2) {
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

    handleReservation = () => {
        this.props.dispatch({
            type: 'FETCH_RESERVED_ALREADY',
            payload: Number(this.props.match.params.id)
        })
    }

    handleBooking = () => {
        let id = Number(this.props.match.params.id)
        let dates = this.state;
        console.log(`we booking now`, id);
        if (this.state.startDate !== '' || this.state.returnDate !== '') {
            this.props.history.push(`/payment/${id}/${dates.startDate}/${dates.returnDate}`)
        }
        else {
            alert('Please select your reservation dates!')
        }
    }



    render() {
        console.log(this.state);

        // this.handleStartDateCheck();
        // this.handleEndDateCheck();
        return (
            <>
                <Grid className="grid" container spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <div>

                                {this.props.reduxState.rvs.map((rvSelected) => {

                                    if (rvSelected.id === Number(this.props.match.params.id)) {
                                        return (
                                            <>
                                                <span key={rvSelected.id}>
                                                    <img className="photo" alt={rvSelected.rv_description} src={rvSelected.rv_image_path} />
                                                    <div>                                        {rvSelected.rv_description}
                                                    </div>
                                                </span>


                                            </>
                                        )

                                    } else {
                                        return (
                                            <>
                                                {/* <span key={rvSelected.id}>
                        </span> */}
                                            </>)


                                    }
                                })}

                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <h3>RESERVE YOUR DATES</h3>
                            <div>
                                PICK UP DATE
                        <input
                                    type='date'
                                    name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleDateChangeFor('startDate')} />
                                RETURN DATE
                        <input
                                    type='date'
                                    name="returnDate"
                                    value={this.state.returnDate}
                                    onChange={this.handleDateChangeFor('returnDate')} />
                                <span><button onClick={this.handleBooking}>Continue to Booking</button></span>

                            </div>
                            <h3>Reserved Dates</h3>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>PICK UP DATE</TableCell>
                                            <TableCell>DROP OFF DATE</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.reduxState.reservationByRv.map((rv) => {
                                            return (
                                                <TableRow key={rv.id}>
                                                    <TableCell>{moment(rv.pick_up_date).format("LL")}</TableCell>
                                                    <TableCell>{moment(rv.drop_off_date).format("LL")}</TableCell>
                                                </TableRow>

                                            )
                                        })}

                                    </TableBody>
                                </Table>
                            </TableContainer>
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

export default connect(mapReduxStateToProps)(Reservation);