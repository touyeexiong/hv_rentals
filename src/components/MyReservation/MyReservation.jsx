import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import moment from 'moment'

class MyReservation extends Component {

    componentDidMount() {
        this.handleDate();
    }

    handleDate = () => {
        let date = this.props.start;
        moment(date).format('DD-MM-YYYY');
        console.log(date);
        
    }

    handleDelete = () => {
        console.log('we trying to delete now', this.props);
        this.props.dispatch({
            type: 'DELETE_RESERVATION',
            payload: this.props.id
        })
        
    }

    render() {
        return (
            <>
            <tr>    
                    <td>{this.props.id}</td>
                    <td>{moment(this.props.start).format("LL")}</td>
                    <td>{moment(this.props.end).format("LL")}</td>
                    <td>$ {this.props.price}</td>
                    <td><button onClick={this.handleDelete}>CANCEL RESERVATION</button></td>
            </tr>
            </>
        )
    }
}

export default withRouter(connect()(MyReservation));