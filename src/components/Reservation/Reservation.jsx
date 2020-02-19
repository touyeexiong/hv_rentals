import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ReservedDates from '../ReservedDates/ReservedDates'

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
        if (this.state.startDate != '' || this.state.returnDate != '') {
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
                <h1>we in reservations now</h1>
                <div>
                    {this.props.reduxState.rvs.map((rvSelected) => {

                        if (rvSelected.id === Number(this.props.match.params.id)) {
                            return (
                                <>
                                    <span key={rvSelected.id}>
                                        <img alt={rvSelected.rv_description} src={rvSelected.rv_image_path} />
                                        {rvSelected.rv_description}
                                    </span>
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

                <table>
                    <thead>
                        <tr>
                            <td>DATES ALREADY RESERVED</td>
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


            </>

        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Reservation);