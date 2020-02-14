import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reservation extends Component {

    state = {
        startDate: '',
        returnDate: '',
    }

    componentDidMount() {
        // this.testFunction();
        this.props.dispatch({
            type: 'FETCH_RVS'
        })
    }

    handleBooking = () => {
        let id = Number(this.props.match.params.id)
        let dates = this.state;
        console.log(`we booking now`, id);
        this.props.history.push(`/payment/${id}/${dates.startDate}/${dates.returnDate}`,  )
    }

    fromHandle = (event) => {
        console.log(`this is the from date`, event.target.value);
        this.setState ({
            startDate: event.target.value
        })
        console.log(this.state.startDate);
        
    }
    
    toHandle = (event) => {
        console.log(`this is the to date`, event.target.value);
        
    }

    handleDateChangeFor = dateSelections => (event) => {
        this.setState({
            [dateSelections]: event.target.value,
        });
    }


    render() {
        console.log(this.state.returnDate);
        console.log((this.state));



        return (
            <>
                <h1>we in reservations now</h1>
                <div>
                    {this.props.reduxState.rvs.map((rvSelected) => {
                        // console.log(rvSelected.id);

                        if (rvSelected.id === Number(this.props.match.params.id)) {
                            return (
                                <>
                                    {/* console.log(rvSelected.rv_description); */}
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
                        onChange={this.handleDateChangeFor('startDate')}/>
                                        RETURN DATE
                        <input 
                        type='date' 
                        name="returnDate"
                        value={this.state.returnDate}
                        onChange={this.handleDateChangeFor('returnDate')}/>
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
            </>
            // <>
            // {this.testFunction()}
            // </>

        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Reservation);