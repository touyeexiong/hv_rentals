import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

class MyReservation extends Component {

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
            <tr>    <td>{this.props.id}</td>
                    <td>{this.props.start}</td>
                    <td>{this.props.end}</td>
                    <td>$ {this.props.price}</td>
                    <td><button onClick={this.handleDelete}>CANCEL RESERVATION</button></td>
            </tr>
            </>
        )
    }
}

export default withRouter(connect()(MyReservation));