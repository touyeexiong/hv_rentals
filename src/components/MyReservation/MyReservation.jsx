import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/styles'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        background: props =>
            props.color === 'red'
                ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: props =>
            props.color === 'red'
                ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
                : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 8,
    },
});

function MyButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
    color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

class MyReservation extends Component {

    componenTableCellidMount() {
    }

    handleDelete = () => {
        this.props.dispatch({
            type: 'DELETE_RESERVATION',
            payload: this.props.id
        })

    }

    handleUpdate = () => {
        this.props.history.push(`/dashboard/update/${this.props.id}/${this.props.rv_id}`);
    }

    render() {
        return (
            <>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell>{this.props.rv}</TableCell>
                    <TableCell>{this.props.rvDes}</TableCell>
                    <TableCell>{moment(this.props.start).format("LL")}</TableCell>
                    <TableCell>{moment(this.props.end).format("LL")}</TableCell>
                    <TableCell>$ {this.props.price}</TableCell>
                    <TableCell><MyButton color="blue" onClick={this.handleUpdate}>UPDATE RESERVATION</MyButton></TableCell>
                    <TableCell><MyButton color="red" onClick={this.handleDelete}>CANCEL RESERVATION</MyButton></TableCell>
                </TableRow>
            </>
        )
    }
}

export default withRouter(connect()(MyReservation));