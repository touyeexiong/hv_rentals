import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import MyReser from '../MyReservation/MyReservation';
import DashNav from '../DashNav/DashNav'
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

class UserPage extends Component {

  

  componentDidMount = () => {
    this.getReservation();
  }

  getReservation = () => {
    console.log('we working in dashboard');
    this.props.dispatch({
      type: 'FETCH_RESERVATION',
      payload: this.props.user.id
    })
  }
  render() {
    return (
      <>
      <DashNav />
        <h1 id="welcome">
          Welcome, {this.props.user.username} !
      </h1>
      <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
                <TableCell>RESERVATION ID</TableCell>
                <TableCell>RV</TableCell>
                <TableCell>RV DESCRIPTION</TableCell>
                <TableCell>PICK UP DATE</TableCell>
                <TableCell>RETURN DATE</TableCell>
                <TableCell>TOTAL PRICE</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
          </TableRow>
            </TableHead>
          <TableBody>
            {this.props.getReser.map((reser) => {
              return (
                <MyReser key={reser.id} user_id={reser.user_id} rv={reser.rv_name} rvDes={reser.rv_description} id={reser.id} start={reser.pick_up_date} end={reser.drop_off_date} price={reser.total_price} rv_id={reser.rv_id} />
              )
            })}
              </TableBody>
        
          </Table>
      </TableContainer>
        <ul>

        </ul>

      </>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user,
  getReser: state.getReser,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
