import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import moment from 'moment'

class MyReservation extends Component {

    componentDidMount() {
    }

    handleDelete = () => {
        console.log('we trying to delete now', this.props);
        this.props.dispatch({
            type: 'DELETE_RESERVATION',
            payload: this.props.id
        })
        
    }

    handleUpdate = () => {
        console.log('we trying to update bro', this.props.id);
        this.props.history.push(`/dashboard/update/${this.props.id}`);
    }

    render() {
        return (
            <>
            <tr>    
                    <td>{this.props.id}</td>
                    <td>{this.props.rv}</td>
                    <td>{this.props.rvDes}</td>
                    <td>{moment(this.props.start).format("LL")}</td>
                    <td>{moment(this.props.end).format("LL")}</td>
                    <td>$ {this.props.price}</td>
                    <td><button onClick={this.handleUpdate}>UPDATE RESERVATION</button></td>
                    <td><button onClick={this.handleDelete}>CANCEL RESERVATION</button></td>
            </tr>
            </>
        )
    }
}

export default withRouter(connect()(MyReservation));