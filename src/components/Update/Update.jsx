import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Update extends Component {
    state = {
        startDate: '',
        returnDate: '',
        updated_price: 0,
        reservation_id: 0,
    }

    componentDidMount() {
        this.handleNewPrice();

    }


    handleNewPrice = () =>{
        let date1 = moment(this.state.startDate);
        let date2 = moment(this.state.returnDate);
        let daysOfRental = date2.diff(date1, 'days')
        console.log(daysOfRental);
        let updated_price = 100 * daysOfRental
        // this.priceConditional(updated_price);
        this.setState({
             
                startDate: this.state.startDate,
                returnDate: this.state.returnDate,
                updated_price: updated_price,
                reservation_id: this.props.match.params.id
            
        })
    }

    // priceConditional = (updated_price, price2) => {
    //     if (updated_price > price2) {
    //         console.log('price is higher now', updated_price);

    //     } else {
    //         console.log(updated_price, 'price is lower', price2);

    //     }
    // }

    handleDateChangeFor = dateSelections => (event) => {
        this.setState({
            [dateSelections]: event.target.value,
        });
    }

    handleUpdate = () => {
        console.log('we trying to update');
        this.props.dispatch({
            type: 'UPDATE_RESERVATION',
            payload: this.state,
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <>
                <h1>UPDATE RESERVATION</h1>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <td>RESERVATION ID</td>
                            <td>RV</td>
                            <td>RV DESCRIPTION</td>
                            <td>PICK UP DATE</td>
                            <td>RETURN DATE</td>
                            <td>TOTAL PRICE</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.reduxState.getReser.map((reserSelected) => {
                            if (reserSelected.id === Number(this.props.match.params.id)) {
                                return (
                                    <tr key={reserSelected.id}>
                                        <td>{reserSelected.id}</td>
                                        <td>{reserSelected.rv_name}</td>
                                        <td>{reserSelected.rv_description}</td>
                                        <td>{moment(reserSelected.pick_up_date).format("LL")}</td>
                                        <td>{moment(reserSelected.drop_off_date).format("LL")}</td>
                                        <td>{reserSelected.total_price}</td>
                                    </tr>
                                )
                            } else {
                                return
                            }

                        })}

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
                                <td>{this.state.updated_price || 0}</td>
                                <td><button onClick={this.handleNewPrice}>CLICK FOR NEW PRICING</button></td>
                                <td><button onClick={this.handleUpdate}>UPDATE</button></td>
                        </tr>
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