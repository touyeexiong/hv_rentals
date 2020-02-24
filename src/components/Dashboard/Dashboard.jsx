import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyReser from '../MyReservation/MyReservation';
import DashNav from '../DashNav/DashNav'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
